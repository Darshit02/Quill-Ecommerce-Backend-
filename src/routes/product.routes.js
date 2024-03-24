const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller.js");
const authanticate = require("../middleware/authenticate.js");

router.get("/", authanticate, productController.getAllProducts);
router.get("/id/:id", authanticate, productController.findProductById);


module.exports = router;