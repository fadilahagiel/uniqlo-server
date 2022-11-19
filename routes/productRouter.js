const ProductController = require('../controllers/productController')

const router = require('express').Router()

router.get('/', ProductController.showAllProduct)
router.post('/', ProductController.addProduct)
router.put('/buy/:_id', ProductController.buyProduct)
router.put('/restock/:_id', ProductController.restockProduct)
router.get('/:_id', ProductController.showOneProduct)
router.delete('/:_id', ProductController.deleteOneProduct)
router.put('/:_id', ProductController.updateOneProduct)

module.exports = router