const jwt = require('jsonwebtoken')
const UserModel = require('../models/User.model')

const requireAuth = (req,res,next) =>{
    const token = req.cookies.jwt
    if (token){
        jwt.verify(token, process.env.JWT_SECRET, (err,decodedToken)=>{
            if (err){
                console.log(err)
                res.redirect('/')
            }
            else{
                if (decodedToken.mssv){
                    return next()
                }
                else {
                    res.redirect('/')
                }
            }
        })
    }
    else{
         res.redirect('/')
    }
}

const requireAdminAuth = (req,res,next) =>{
    const token = req.cookies.jwt
    if (token){
        jwt.verify(token, process.env.JWT_SECRET, (err,decodedToken)=>{
            if (err){
                console.log(err)
                 res.redirect('/admin/login')
            }
            else{
                if (decodedToken.username){
                    return next()
                }
                else {
                    res.redirect('/')
                }
            }
        })
    }
    else{
         res.redirect('/')
    }
}

const checkUser =  (req,res,next) =>{
    const token = req.cookies.jwt
    if (token){
        jwt.verify(token, process.env.JWT_SECRET, async (err,decodedToken)=>{
            if (err){
                next()
            }
            else{
                let user = await UserModel.findOne({mssv: decodedToken.mssv})
                res.locals.user = user || {mssv: 000}
                next()
            }
        })
    }
    else{
        res.locals.user = null
        next()
    }
}

const checkAdmin = (req,res,next) =>{
    const token = req.cookies.jwt
    if (token){
        jwt.verify(token, process.env.JWT_SECRET, async (err,decodedToken)=>{
            if (err){
                res.locals.admin = null
                next()
            }
            else{
                let admin = await accountModel.findOne({username: decodedToken.username})
                if (admin){
                    res.locals.admin = admin
                } else{
                    res.locals.admin = {username: ''}
                }
                next()
            }
        })
    }
    else{
        res.locals.admin = null
        next()
    }
}

const isLogged = (req,res,next) =>{
    const token = req.cookies.jwt
    if (token){
        jwt.verify(token, process.env.JWT_SECRET, async (err,decodedToken)=>{
            if (err){
                next()
            }
            else{
                //Check user or admin
                if (decodedToken.mssv){
                    return res.redirect('/')
                }
                else{
                    return res.redirect('/admin')
                }
            }
        })
    }
    else{
        next()
    }
}

module.exports = { requireAuth, checkUser, requireAdminAuth, checkAdmin, isLogged }