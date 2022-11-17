const mongoose = require('mongoose')

const Product = mongoose.model('Products', {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 10000
    },
    description: {
        type: String,
        required: true,
        minLength: 10
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
    author_id: {
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
})

module.exports = Product
