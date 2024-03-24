const paymentService = require("../services/paymentService.js");

const createPaymentLink = async (req, res) => {
  try {
    const paymentLink = await paymentService.createPaymentLink(req.params.id);
    console.log(req.params.id);
    return res.status(200).send(paymentLink);
  } catch (error) {
    res.status(500).json({ message: error.message , success: false});
  }
};

const updatePaymentInformation = async (req, res) => {
  try {
    await paymentService.updatePaymentInformation(req.query);
    return res
      .status(200)
      .send({ message: "pyment Information updated", success: true });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createPaymentLink,
  updatePaymentInformation,
};
