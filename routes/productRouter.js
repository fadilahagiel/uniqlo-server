const ProductController = require('../controllers/productController')
const { adminAuthor } = require('../middlewares/authorization')

const router = require('express').Router()

router.get('/', ProductController.showAllProduct)
router.post('/', adminAuthor, ProductController.addProduct)
router.put('/buy/:_id', ProductController.buyProduct)
router.put('/restock/:_id', adminAuthor,ProductController.restockProduct)
router.get('/:_id', ProductController.showOneProduct)
router.delete('/:_id', adminAuthor, ProductController.deleteOneProduct)
router.put('/:_id', adminAuthor, ProductController.updateOneProduct)

module.exports = router