const express = require('express')
const Router = express.Router()
const _ = require('lodash')
const ProductModels = require('../models/Product.models')


Router.post('/addproduct', async (req, res) => {
    const data = req.body
    if (_.isEmpty(data)) {
        res.status(400).json({ code: 0, message: 'Make sure you type it all' })
    } else {
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