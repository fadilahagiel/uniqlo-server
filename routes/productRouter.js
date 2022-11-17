const ProductController = require('../controllers/productController')

const router = require('express').Router()

router.get('/', ProductController.showAllProduct)
router.get('/:_id', ProductController.showOneProduct)
router.post('/', ProductController.addProduct)

module.exports = router