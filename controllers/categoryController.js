const Category = require('../models/category')

class CategoryController {
    static async showAllCategories(req, res){
        try {
            const categories = await Category.find()
            res.status(200).json(categories)
        } catch (error) {
            res.status(500).json({ message: "ISE" })
        }
    }

    static async addCategory(req, res) {
        try {
            const { name } = req.body
            const category = new Category({ name })
            const newCategory = await category.save()
            res.status(201).json(newCategory)
        } catch (error) {
            res.status(500).json({ message: "ISE" })
        }
    }
}


module.exports = CategoryController