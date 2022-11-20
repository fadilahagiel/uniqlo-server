const User = require("../models/user");

const adminAuthor = async (req, res, next) => {
    try {
        const { id } = req.user
        const user = await User.findOne({ _id: id })
        if (user.role !== 'admin') throw { name: 'forbidden' }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {adminAuthor}