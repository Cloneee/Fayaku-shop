const express = require('express')
const Router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

Router.post('/login', (req,res)=>{
    res.send('login')
})

module.exports = Router