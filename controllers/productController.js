const { findOne } = require('../models/product')
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

    static async deleteOneProduct(req, res, next) {
        try {
            const { _id } = req.params
            const product = await Product.findOne({ _id })
            if (!product) throw { name: 'invalid_credentials' }
            await Product.deleteOne({_id})
            res.status(200).json({message: `Success delete ${_id}`})
        } catch (error) {
            next(error)
        }
    }

    static async updateOneProduct(req, res, next) {
        try {
            const { _id } = req.params
            const { name, price, description, imageUrl, stock, category } = req.body
            if (!name || !price || !description || !imageUrl || !stock || !category) {
                throw { name: "empty_input"}
            } 
            const product = await Product.findOne({ _id }, )
            if (!product) throw { name: 'invalid_credentials' }
            await Product.updateOne({ _id }, { name, price, description, imageUrl, stock, category })
            res.status(200).json({ message: `Success update ${product.name}` })
        } catch (error) {
            next(error)
        }
    }

    static async restockProduct(req, res, next) {
        try {
            const { _id } = req.params
            const { stock } = req.body
            const product = await Product.findOne({ _id },)
            if (!product) throw { name: 'invalid_credentials' }
            await Product.updateOne({ _id }, { stock })
            res.status(200).json({ message: `Success restock ${product.name}` })
        } catch (error) {
            next(error)
        }
    }

    static async buyProduct(req, res, next) {
        try {
            const { _id } = req.params
            const {quantity} = req.body
            const product = await Product.findOne({ _id },)
            if (!product) throw { name: 'invalid_credentials' }
            await Product.updateOne({ _id }, { stock: product.stock - quantity })
            res.status(200).json({ message: `Success buy ${product.name}` })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ProductController