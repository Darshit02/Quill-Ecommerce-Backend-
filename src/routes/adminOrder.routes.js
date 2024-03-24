const express = require("express");
const router = express.Router();

const orderController = require("../controller/adminOrder.controller.js");
const authanticate = require("../middleware/authenticate.js");

router.get("/", authanticate, orderController.getAllOrders);
router.put(
  "/:orderId/confirmed",
  authanticate,
  orderController.confirmedOrders
);
router.put("/:orderId/ship", authanticate, orderController.shippOrders);
router.put("/:orderId/deliver", authanticate, orderController.deliverOrders);
router.put("/:orderId/cancel", authanticate, orderController.cancelledOrders);
router.put("/:orderId/delete", authanticate, orderController.deleteOrders);


module.exports = router;