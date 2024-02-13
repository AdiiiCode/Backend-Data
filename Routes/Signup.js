
// require("dotenv").config();
const config =  require("../Variables/var")
const shipper = require("../Models/Shipper");
const driver = require("../Models/Driver");
const { sendOTPEmail, otp } = require("../Pages/OTPGenerate");
const SignUp = async (req,res)=>
{
    const { Fname, Lname, email, Business, Company, Password, Option } = req.body;
  try {
    let user = await shipper.findOne({ email: email });
    if (user) {
      return res
        .status(200)
        .json({ message: "Email Already Exists", status: "emailExists" });
    }

    user = await driver.findOne({ email: email });
    if (user) {
      return res
        .status(200)
        .json({ message: "Email Already Exists", status: "emailExists" });
    }
    try {
        config.user.Fname = Fname,
        config.user.Lname = Lname,
        config.user.email = email,
        config.user.Business = Business,
        config.user.Company = Company,
        config.user.Password =  Password,
        config.user.Option = Option,
        config.user.otp = otp,
      await sendOTPEmail(email, otp); 
      return res
        .status(200)
        .json({ otpmessage: "OTP sent successfully", status: "otpSent" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = SignUp;