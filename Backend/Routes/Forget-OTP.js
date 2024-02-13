
require("dotenv").config();
const { sendForgetOTP, OTP1 } = require("../Pages/ForgetOTP");

const ForgetOTP = async (req,res)=>
{
    const { OTPPP } = req.body;
    console.log(OTP1);
    try {
      if (OTPPP === OTP1) {
        console.log("OTP Success");
        return res.status(200).json({ message: "OTP Validation Successfull" });
      } else if (OTPPP !== OTP1) {
        console.log("OTP Not Success");
        console.log(OTP1);
        return res.status(400).json({ message: "OTP Validation UnSuccessfull" });
      } else {
        console.log("Error Sorry");
        return res.status(500).json({ message: "Internal Server Error" });
        console.log(OTP1);
      }
      console.log(OTP1);
    } catch (error) {
      console.log(error);
    }
}

module.exports = ForgetOTP;