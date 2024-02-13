require("dotenv").config();
const bcrypt = require("bcrypt");
const shipper = require("../Models/Shipper");
const driver = require("../Models/Driver");
const config = require("../Variables/var")

const ChangePassword = async (req, res) => {
  const { password } = req.body;
  try {
    let user = await shipper.findOne({ email: config.user.useremail });
    if (!user) {
      let user = await driver.findOne({ email: config.user.useremail });
      if (!user) {
        console.log("email Not Found in Both Tables");
      } else {
        const salt = await bcrypt.genSalt(10);
        const Encrypted = await bcrypt.hash(password, salt);
        user.Password = Encrypted;
        await user.save();
        return res
        .status(200)
        .json({ otpmessage: "OTP sent successfully", status: "otpSent" });
      }
    } else {
      const salt = await bcrypt.genSalt(10);
      const Encrypted = await bcrypt.hash(password, salt);
      user.Password = Encrypted;
      await user.save();
      return res
      .status(200)
      .json({ otpmessage: "OTP sent successfully", status: "otpSent" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = ChangePassword;
