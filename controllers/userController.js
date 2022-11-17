const { default: user } = require("../models/user");

class UserController{
    static async register(req, res) {
        try {
            res.status(201).json({message: "berhasil"})
        } catch (error) {
            res.status(500).json({message: "ISE"})
        }
    }
}