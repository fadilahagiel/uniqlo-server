const router = require('express').Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const categoriesRouter = require('./categoryRouter')
const wishlistRouter = require('./wishlistRouter')
const authentication = require('../middlewares/authentication')

router.use('/users', userRouter)
router.use(authentication)
router.use('/products', productRouter)
router.use('/categories', categoriesRouter)
router.use('/wishlists', wishlistRouter)

module.exports = router