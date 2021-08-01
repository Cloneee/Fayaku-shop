const express = require('express')
const Router = express.Router()
const _ = require('lodash')
const ProductModels = require('../models/Product.models')

Router.get('/', (req, res) => {
    res.json({ code: 1, message: 'Welcome to API' })
})

Router.get('/products', async (req, res) => {
    let { limit, category } = req.query
    let products
    if (limit != undefined) {
        limit = _.toNumber(limit)
    } else {
        limit = 20
    }
    if (category != undefined){
        products = await ProductModels.find({category: category}).sort({_id:-1}).limit(limit)
    }
    else{
        products = await ProductModels.find().sort({_id:-1}).limit(limit)
    }
    return res.status(200).json(products)
})

Router.get('/products/:id', async (req,res) => {
    const { id } = req.params
    let product = await ProductModels.findById(id)
    res.status(200).json(product)
})

Router.post('/product', async (req, res) => {
    const data = req.body
    if (_.isEmpty(data)) {
        res.status(400).json({ code: 0, message: 'Make sure you type it all' })
    } else {
        let tempImg = data.image
        let imgArr = tempImg.split(',')
        data.image = imgArr
        await ProductModels.create(data, (err) => {
            if (err) {
                console.log(err)
                return res.status(400).json({code: 0, message: 'Make sure you typed it right'})
            }
            else {
                return res.status(201).json({ code: 1, message: 'Success added to database' })
            }
        })
    }
})

module.exports = Router