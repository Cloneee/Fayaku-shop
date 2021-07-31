const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sale:{
        type: Number,
    },
    image: {
        type: String,
        required: true
    },
    available:{
        type: Boolean
    }
})

module.exports = mongoose.model('Product', ProductSchema)