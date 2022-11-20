const User = require("../models/user");
const Product = require('../models/product')

class WishlistController{
    static async addWishlist(req, res, next) {
        try {
            const userId = req.user.id
            const { ProductId } = req.params
            const product = await Product.findOne({ _id: ProductId })
            const {_id, name, price, imageUrl, category} = product
            const newWishlist = { _id, name, price, imageUrl, category }
            await User.updateOne({
                _id: userId
            }, { $push: { wishlists: newWishlist } })
            res.status(200).json({message: `Success add ${product.name} to wishlist`})
        } catch (error) {
            next(error)
        }
    }

    static async deleteWishlist(req, res, next) {
        try {
            const _id = req.user.id
            const { name } = req.params
            const product = await Product.findOne({ name})
            if(!product) throw{name: "invalid_credentials"}
            await User.updateOne({ _id }, { 
                $pull: {
                    wishlists: { name }
                }
            })
            res.status(200).json({ message: `Success delete ${product.name} from wishlist` })
        } catch (error) {
            next(error)
        }
    }

    static async showMyWishlist(req, res, next) {
        try {
            const _id = req.user.id
            const user = await User.findOne({ _id })
            const wishlists = user.wishlists
            res.status(200).json(wishlists)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = WishlistController