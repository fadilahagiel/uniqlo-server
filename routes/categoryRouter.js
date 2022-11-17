const CategoryController = require('../controllers/categoryController')


const router = require('express').Router()

router.get('/', CategoryController.showAllCategories)
router.post('/', CategoryController.addCategory)

module.exports = router