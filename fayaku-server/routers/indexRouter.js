const express = require('express')
const Router = express.Router()

Router.get('/', (req,res)=>{
    res.json({code: 1, message: 'Welcome to API'})
})

module.exports = Router