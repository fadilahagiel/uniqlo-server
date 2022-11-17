const router = require('express').Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const categoriesRouter = require('./categoryRouter')
const authentication = require('../middlewares/authentication')

router.use('/users', userRouter)
router.use(authentication)
router.use('/products', productRouter)
router.use('/categories', categoriesRouter)

module.exports = router