const express = require("express");
const router = express.Router();

const cartController = require("../controller/cart.controller.js");
const authanticate = require("../middleware/authenticate.js");

router.get("/", authanticate, cartController.findUserCart);
router.put("/add", authanticate, cartController.addItemToCart);

module.exports = router;
