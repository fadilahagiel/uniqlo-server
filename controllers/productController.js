const Product = require('../models/product')

class ProductController {
    static async showAllProduct(req, res) {
        try {
            const products = await Product.find()
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json({ message: "ISE" })
        }
    }

    static async addProduct(req, res) {
        try {
            const { name, price, description, imageUrl, stock } = req.body
            const product = new Product({ name, price, description, imageUrl, stock })
            const newProduct = await product.save()
            res.status(201).json({newProduct})
        } catch (error) {
            res.status(500).json({ message: "ISE" })
        }
    }
}

module.exports = ProductController