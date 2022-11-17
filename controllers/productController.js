const Product = require('../models/product')

class ProductController {
    static async showAllProduct(req, res, next) {
        try {
            const products = await Product.find()
            res.status(200).json(products)
        } catch (error) {
            next(error)
        }
    }

    static async showOneProduct(req, res, next) {
        try {
            const {_id} = req.params
            const product = await Product.findOne({ _id })
            if (!product) throw { name: 'invalid_credentials' }
            res.status(200).json(product)
        } catch (error) {
            next(error)
        }
    }

    static async addProduct(req, res, next) {
        try {
            const { name, price, description, imageUrl, stock, category } = req.body
            const author = req.user.username
            const product = new Product({ name, price, description, imageUrl, stock, category, author })
            const newProduct = await product.save()
            res.status(201).json({newProduct})
        } catch (error) {
            next(error)
        }
    }

    static async deleteProduct(req, res, next) {
        
    }
}

module.exports = ProductController