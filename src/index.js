const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "welcome to Quill-ecommerce", status: true });
});

const authRouters = require("./routes/auth.route.js");
app.use("/auth", authRouters);
const userRouters = require("./routes/user.route.js");
app.use("/api/user", userRouters);
const productRouter = require("./routes/product.routes.js");
app.use("/api/products", productRouter);
const adminProductRouter = require("./routes/adminProduct.routes.js");
app.use("/api/admin/products", adminProductRouter);
const cartRouter = require("./routes/cart.routes.js");
app.use("/api/cart", cartRouter);
const cartItemRouter = require("./routes/cartItem.routes.js");
app.use("/api/cart_items", cartItemRouter);
const orderRouter = require("./routes/order.routes.js");
app.use("/api/orders", orderRouter);
const adminOrderRouter = require("./routes/adminOrder.routes.js");
app.use("/api/admin/orders", adminOrderRouter);
const reviewRouter = require("./routes/review.routes.js");
app.use("/api/reviews", reviewRouter);
const ratingRouter = require("./routes/rating.routes.js");
app.use("/api/ratings", ratingRouter);
const paymentRouter = require("./routes/payment.routes.js");
app.use("/api/payment", paymentRouter);

module.exports = app;
