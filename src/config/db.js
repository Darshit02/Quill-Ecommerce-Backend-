const mongoose = require("mongoose");

const mongodbURL =
  "mongodb+srv://Darshit:LazY@cluster0.g56zhxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () => {
  return mongoose.connect(mongodbURL);
};

module.exports = { connectDB };
