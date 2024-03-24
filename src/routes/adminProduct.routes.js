const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller.js');
const authanticate = require('../middleware/authenticate.js');

router.post('/', authanticate,productController.createProduct)
router.post('/create', authanticate , productController.createMultipleProduct)
router.delete('/:id',authanticate,productController.deleteProduct)
router.put('/:id',authanticate,productController.updateProduct)

module.exports = router;