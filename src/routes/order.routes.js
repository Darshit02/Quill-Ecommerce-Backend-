const express = require("express");
const router = express.Router();
const orderController = require("../controller/order.controller.js");
const authanticate = require("../middleware/authenticate.js");

router.post("/", authanticate, orderController.createOrder);
router.get("/user", authanticate, orderController.orderHistory);
router.get("/:id", authanticate, orderController.findOrderById);

module.exports = router;
