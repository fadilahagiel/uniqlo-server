const ProductController = require('../controllers/productController')

const router = require('express').Router()

router.get('/', ProductController.showAllProduct)

module.exports = router