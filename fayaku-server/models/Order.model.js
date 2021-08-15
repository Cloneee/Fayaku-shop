const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    address:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    product: [{
        productID: {type: mongoose.Type.ObjectId, ref: 'Product'},
        quantity: Number
    }],

    // Thêm order header
    note: String
})

module.exports = mongoose.model('Order', OrderSchema)