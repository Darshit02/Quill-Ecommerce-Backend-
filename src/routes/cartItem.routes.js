const express = require('express');
const router = express.Router();
const cartItemController = require('../controller/cartItem.controller.js');
const authanticate = require('../middleware/authenticate.js');

router.put('/:id' , authanticate , cartItemController.updateCartItem)
router.delete('/:id',authanticate,cartItemController.removeCartItem)


module.exports = router;