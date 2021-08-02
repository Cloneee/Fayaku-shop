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
    brand: String,
    suppiler: String,
    price: {
        type: Number,
        required: true
    },
    sale:{
        type: Number,
    },
    image:[String],
    status: Number,
    description: String,
    rating:{
        type: [Number],
        enum: [1,2,3,4,5]
    },
})

module.exports = mongoose.model('Product', ProductSchema)