const WishlistController = require('../controllers/wishlistController')

const router = require('express').Router()

router.get('/', WishlistController.showMyWishlist)
router.post('/:ProductId', WishlistController.addWishlist)
router.delete('/:name', WishlistController.deleteWishlist)

module.exports = router