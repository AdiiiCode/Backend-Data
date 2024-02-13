const mongoose = require("mongoose");

const Shipper = new mongoose.Schema({
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

const shipper = mongoose.model("Shippers Signups", Shipper);

module.exports = shipper;
