const mongoose = require('mongoose')

const Product = mongoose.model('Products', {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: 1
    },
    status: {
        type: Number,
        default: 'active'
    },
})

module.exports = Product
