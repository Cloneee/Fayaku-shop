const express = require('express')
const Router = express.Router()
const _ = require('lodash')
const ProductModel = require('../models/Product.model')

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

Router.get('/product/ids', async (res, req) => {
    let ids = req.body.ids



    res.status(200).json(products)
})

Router.post('/product', async (req, res) => {
    const data = req.body
    if (_.isEmpty(data)) {
        res.status(400).json({ code: 0, message: 'Make sure you type it all' })
    } else {
        let tempImg = data.image
        let imgArr = tempImg.split(',')
        data.image = imgArr
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

module.exports = Router