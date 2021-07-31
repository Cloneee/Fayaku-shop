const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available:{
        type: String
    }
})

module.exports = mongoose.model('Items', ItemSchema)