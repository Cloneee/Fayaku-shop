const express = require('express')
const Router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const UserModel = require('../models/User.model')

Router.post('/register', async (req, res) => {
    let { email, password, fullname, sex, phone } = req.body
    UserModel.exists({ email: email })
        .then((isExists) => {
            if (isExists) {
                return res.status(406).json({ code: 0, message: 'Email already being used, please try again' })
            } else {
                bcrypt
                    .hash(password, 10)
                    .then((hashed) => {
                        let user = new UserModel({
                            email: email,
                            password: hashed,
                            fullname: fullname,
                            sex: sex,
                            phone: phone
                        })
                        user.save();
                    })
                    .then(() => {
                        return res.status(200).json({ code: 1, message: 'Register success' })
                    });
            }
        })
})

Router.post('/login', async (req, res) => {
    let { email, password } = req.body
    UserModel.findOne({email: email})
        .then((doc)=>{
            if (doc){
                bcrypt.compare(password, doc.password)
                    .then((isEqual)=>{
                        if (isEqual){
                            res.status(200).json({code: 1, message: 'Login success'})
                        } else {
                            res.status(406).json({code: 0, message: 'Wrong password, please try again'})
                        }
                    })
            } else{
                res.status(404).json({code: 0, message: 'Email not exists'})
            }
        })
})

module.exports = Router