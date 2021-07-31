const express = require('express')
const Router = express.Router()
const _ = require('lodash')
const ProductModels = require('../models/Product.models')

Router.get('/', (req, res) => {
    res.json({ code: 1, message: 'Welcome to API' })
})

Router.get('/products', async (req, res) => {
    const { limit } = req.query
    if (limit == undefined) {
        let products = await ProductModels.find().sort({_id:-1}).limit(20)
        return res.status(200).send(products)
    } else {
        let numbLimit = parseInt(limit)
        let products = await ProductModels.find().sort({_id:-1}).limit(numbLimit)
        return res.status(200).send(products)
    }
})


module.exports = Router