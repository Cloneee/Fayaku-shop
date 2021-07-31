const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String
    },
    avatar:{
        type: String,
        default: 'https://st3.depositphotos.com/4111759/13425/v/380/depositphotos_134255588-stock-illustration-empty-photo-of-male-profile.jpg'
    },
    cart:[{
        productId: String,
        quantity: Number
    }]
})

module.exports = mongoose.model('Product', ProductSchema)