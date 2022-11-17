const mongoose = require('mongoose')

const User = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: () => Promise.resolve(false),
            message: 'Email validation failed'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    role: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Users', User)
