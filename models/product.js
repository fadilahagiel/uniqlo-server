const mongoose = require('mongoose')

const Product = mongoose.model('Products', {
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [10000, 'Minimum price is 10,000']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [11, 'Description`s character must be longer than 10']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required']
    },
    stock: {
        type: Number,
        required: [true, 'Stock is required'],
        min: [1, 'Minimum stock is 1']
    },
    status: {
        type: String,
        default: 'active'
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
})

module.exports = Product
