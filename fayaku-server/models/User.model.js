const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email:{
        type: String,
        unique: true,
        validate: /.+\@.+\..+/,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: /^\d{10}$/
    },
    password:{
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    avatar:{
        type: String,
        default: 'https://st3.depositphotos.com/4111759/13425/v/380/depositphotos_134255588-stock-illustration-empty-photo-of-male-profile.jpg'
    },
    cart:[{
        productId: {
            type: mongoose.Types.ObjectId,
            ref: 'Product'
        },
        quantity: Number
    }],
    order:[{
        type: mongoose.Types.ObjectId,
        ref: 'Order'
    }],
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user'],
        default: 'user'
    },
    addressList:[{
        name: String, 
    }],
    status: {
        type: Number,
        enum: [0,1,2],
        default: 1
    }
})

module.exports = mongoose.model('User', UserSchema)