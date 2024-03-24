const razorpay = require("../config/razorpayClient.js");
const orderServices = require("../services/orderService.js");

const createPaymentLink = async (orderId) => {
  try {
    const order = await orderServices.findOrderById(orderId);
    const paymentLinkRequest = {
      amount: order.totalPrice * 100,
      currency: "INR",
      customer: {
        name: order.user.firstName + " " + order.user.lastName,
        email: order.user.email,
       contact: order.user.phoneNumber,
      },
      notify: {
        email: true,
       sms: true,
      },
      reminder_enable: true,
      callback_url: `http://localhost:5173/payment/${orderId}`,
      callback_method: "get",
    };
    // console.log(paymentLinkRequest);
    //ERROR ACCORD
    const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);
    const paymentLinkId = paymentLink.id;
    const payment_link_url = paymentLink.short_url;

    const resData = {
      paymentLinkId,
      payment_link_url,
    };

    return resData;
  } catch (error) {
    throw new Error(error.message, "this is error");
  }
};

const updatePaymentInformation = async (reqData) => {
  const paymentId = reqData.payment_id;
  const orderId = reqData.order_id;

  try {
    const order = await orderServices.findOrderById(orderId);

    const payment = await razorpay.payments.fetch(paymentId);
    if (payment.status === "captured") {
      order.paymentDetails.paymentId = paymentId;
      order.paymentDetails.status = "COMPLETED";
      order.orderStatus = "PLACED";

      await order.save();
    }
    const resData = {
      message: "Your Order Is Placed Successfully",
      success: true,
    };
    return resData;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createPaymentLink,
  updatePaymentInformation,
};
