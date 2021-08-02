const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    email:{
        type: String,
        unique: true,
        match: /.+\@.+\..+/
    },
    avatar:{
        type: String,
        default: 'https://st3.depositphotos.com/4111759/13425/v/380/depositphotos_134255588-stock-illustration-empty-photo-of-male-profile.jpg'
    },
    cart:[{
        productId: String,
        quantity: Number
    }],
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    addressList:[{
        name: String,
        phone: String,
        address: String
    }]
})

module.exports = mongoose.model('User', UserSchema)