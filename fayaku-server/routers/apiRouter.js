const express = require('express')
const Router = express.Router()
const _ = require('lodash')
const ProductModel = require('../models/Product.model')
const { checkUser } = require('../middlewares/auth')
const UserModel = require('../models/User.model')

Router.get('/', (req, res) => {
    res.json({ code: 1, message: 'Welcome to API' })
})

Router.get('/products', async (req, res) => {
    // Filter: limit, page, category, brand, suppiler, pricemin, pricemax, status, ratingmin, ratingmax
    // Option: bestseller, onsale
    let query = req.query
    let filter = {}
    let limit = query.limit ? _.toNumber(query.limit) : 20,
        pricemin = query.pricemin ? query.pricemin : 0,
        pricemax = query.pricemax ? query.pricemax : 100000000,
        ratingmin = query.ratingmin ? query.ratingmin : 1,
        ratingmax = query.ratingmax ? query.ratingmax : 5,
        page = query.page ? _.toNumber(query.page) : 1,
        option = query.option ? query.option : null
    let sort = option == 'bestseller' ? '-sell' : option == 'onsale' ? '-sale' : '-_id'

    for (prop in query) {
        //check exists query
        if (query[prop]) {
            //check exclude filter
            switch (prop) {
                case 'limit':
                case 'pricemin':
                case 'pricemax':
                case 'ratingmin':
                case 'ratingmax':
                case 'option':
                case 'page':
                    break
                default:
                    filter[prop] = query[prop]
            }
        }
    }

    let products = await ProductModel.find(filter)
        .sort(sort).limit(limit)
        .where('price').gte(pricemin).lte(pricemax)
        .where('avrating').gte(ratingmin).lte(ratingmax)
        .skip((page - 1) * limit)
    let totalProducts = await ProductModel.countDocuments(filter)
        .where('price').gte(pricemin).lte(pricemax)
        .where('avrating').gte(ratingmin).lte(ratingmax)
    let totalPages = totalProducts % limit == 0 ? totalProducts / limit : Math.floor(totalProducts / limit) + 1

    return res.status(200).json({
        totalProducts: totalProducts,
        totalPages: totalPages,
        products: products
    })
})

Router.get('/product/:id', async (req, res) => {
    const { id } = req.params
    let product = await ProductModel.findById(id)
    res.status(200).json(product)
})

Router.get('/products/ids', async (req, res) => {
    try {
        let ids = req.body.ids
        if (ids) {
            ids = ids.split(',')
            let products = await ProductModel.find({ '_id': { $in: ids } });
            return res.status(200).json(products)
        } else {
            return res.status(400).json({ code: 0, message: 'Missing ids' })
        }
    }
    catch (err) {
        console.log(err)
    }
})

Router.post('/product', async (req, res) => {
    const data = req.body
    if (_.isEmpty(data)) {
        res.status(400).json({ code: 0, message: 'Make sure you type it all' })
    } else {
        await ProductModel.create(data, (err) => {
            if (err) {
                console.log(err)
                return res.status(400).json({ code: 0, message: 'Make sure you typed it right' })
            }
            else {
                return res.status(201).json({ code: 1, message: 'Success added to database' })
            }
        })
    }
})

Router.get('/search', async (req,res)=>{
    let query = req.query.query,
        option = req.query.option,
        productRegex = new RegExp(query, 'i'),
        result
    if (option == 'mini'){
        result = await ProductModel.find({name: productRegex}).limit(5)
    } else{
        result = await ProductModel.find({name: productRegex}, 'name category avrating price').limit(5)
    }
    res.json(result)
})

// Wait for auth
Router.put('/product/:id/rating', async (req, res) => {
    const id = req.params.id
    let rating = req.body.rating ? _.toNumber(req.body.rating) : null
    if (rating) {
        let product = await ProductModel.findById(id)
        // product.avrating = product.count
        product.save()
        return res.status(200).json({ code: 1, message: 'Success rating' })
    }
    else {
        return res.status(400).json({ code: 0, message: 'Rating invalid' })
    }
})

// Cart session
Router.get('/cart', checkUser, async (req, res) => {
    try {
        res.status(200).json({ cart: res.locals.user.cart })
    } catch (error) {
        res.status(400).json({ code: 0, message: 'Error while checking cart' })
    }
})

Router.post('/cart', checkUser, async (req, res) => {
    try {
        let data = req.body.data
        let user = await UserModel.findById(res.locals.user._id)
        data.map( async product =>{
            let productId = product.productId,
                quantity = product.quantity
            if (productId && _.isNumber(quantity)) {
                function itemExist(id) {
                    return res.locals.user.cart.some(function (el) {
                        return el.productId == id;
                    })
                }

                if (itemExist(productId)) {
                    let indexProduct = user.cart.findIndex(x => x.productId == productId)
                    user.cart[indexProduct].quantity += quantity
                    if (user.cart[indexProduct].quantity<=0){
                        user.cart.splice(indexProduct, 1)
                    }
                } else {
                    if (quantity>0){
                        user.cart.push({ productId: productId, quantity: parseInt(quantity) })
                    }
                }
            }
        })
        user.save()
        res.status(200).json({ code: 1, message: `Success add item` })
    } catch (error) {
        console.log(error);
        res.status(400).json({ code: 0, message: 'Error while adding to cart' })
    }
})

Router.delete('/cart', checkUser, async (req,res)=>{
    try {
        let {productId} = req.body
        function itemExist(id) {
            return res.locals.user.cart.some(function (el) {
                return el.productId == id;
            })
        }
        if (itemExist(productId)){
            let user = await UserModel.findById(res.locals.user._id)
            let indexProduct = user.cart.findIndex(x => x.productId == productId)
            user.cart.splice(indexProduct, 1)
            user.save()
            res.status(200).json({code: 1, message: 'Product deleted'})
        } else{
            res.status(400).json({code: 0, message: 'Product already delete'})
        }
    } catch (error) {
        res.status(400).json({ code: 0, message: 'Error while delete in cart' })
    }
})

module.exports = Router