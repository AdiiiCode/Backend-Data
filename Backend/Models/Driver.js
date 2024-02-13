const mongoose = require("mongoose");

const Driver = new mongoose.Schema({
  Fname: {
    type: String,
    required: true,
  },
  Lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Business: {
    type: String,
    required: true,
  },
  Company: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
});

const driver = mongoose.model("Driver SignUp", Driver);

module.exports = driver;
