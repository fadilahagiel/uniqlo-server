const mongoose = require('mongoose')
const {isEmail} = require('validator')
const User = mongoose.model('Users', {
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'invalid email format']
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

module.exports = User