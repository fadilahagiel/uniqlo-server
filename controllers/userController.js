const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { getToken } = require("../helpers/jwt");
const User = require("../models/user");

class UserController{
    static async register(req, res) {
        try {
            const { email, password, role, username } = req.body
            const hashedPassword = hashPassword(password)
            const user = new User({ email, password:hashedPassword, role, username })
            const newUser = await user.save()
            res.status(201).json(newUser)
        } catch (error) {
            res.status(500).json({message: "ISE"})
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body 
            const userFound = await User.findOne({
                email
            })
            if (!userFound) throw { name: "error_login" }
            const validPass = comparePassword(password, userFound.password)
            if (!validPass) throw { name: "error_login" }
            const payload = { id: userFound._id }
            const access_token = getToken(payload)
            res.status(200).json({access_token})
        } catch (error) {
            res.status(500).json({ message: "ISE" })
        }
    }
}

module.exports = UserController