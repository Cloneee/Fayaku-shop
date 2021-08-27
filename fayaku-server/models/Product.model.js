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
    release: String,
    detail: String,
    sell:{
        type: Number,
        default: 1
    },
    sale: {
        type: Number,
        default: 0
    },
    image:[String],
    status: Number,
    description: String,
    // countRate:{
    //     type: Number,
    //     default: 1
    // },
    avrating: {
        type: Number,
    },
    comments: [{
        userId: mongoose.Types.ObjectId,
        rating: Number,
        comment: String
    }]
})

module.exports = mongoose.model('Product', ProductSchema)