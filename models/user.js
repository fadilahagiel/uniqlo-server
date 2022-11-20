const mongoose = require('mongoose')
const { isEmail } = require('validator')
const { hashPassword } = require('../helpers/bcrypt')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: [isEmail, 'invalid email format'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [8, `Password's length minimum is 8`]
    },
    role: {
        type: String,
        required: [true, 'Role is required']
    },
    wishlists: {
        type: Array
    }
})


userSchema.pre('save', function (next) {
    this.password = hashPassword(this.password)
    next()
})
const User = mongoose.model('Users', userSchema)

module.exports = User