const mongoose = require('mongoose')
const _ = require('lodash')

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
        default: 1
    },
    image:[String],
    status: Number,
    description: String,
    rating:{
        type: [Number],
        enum: [1,2,3,4,5],
        default: [5]
    },
    avrating: {
        type: Number
    }
})

ProductSchema.post("save", async function (doc, next) {
    try {
      let data = await doc
        .model("Product")
        .findOneAndUpdate({ _id: doc._id }, { avrating: _.mean(doc.rating) });
    } catch (error) {
      console.log("get -> error", error);
      next(error);
    }
});

module.exports = mongoose.model('Product', ProductSchema)