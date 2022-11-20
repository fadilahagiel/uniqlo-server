const Category = require('../models/category')

class CategoryController {
    static async showAllCategories(req, res, next){
        try {
            const categories = await Category.find()
            res.status(200).json(categories)
        } catch (error) {
            next(error)
        }
    }

    static async addCategory(req, res, next) {
        try {
            const { name } = req.body
            const category = new Category({ name })
            const newCategory = await category.save()
            res.status(201).json(newCategory)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = CategoryController