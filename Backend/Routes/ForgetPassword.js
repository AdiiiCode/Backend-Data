
// require("dotenv").config();
const shipper = require("../Models/Shipper");
const driver = require("../Models/Driver");
const { sendForgetOTP, OTP1 } = require("../Pages/ForgetOTP");
const config = require("../Variables/var")


const ForgetPassword = async (req,res)=>
{
    try {
        const { email } = req.body;
        const user = await driver.findOne({ email: email });
        if (user) {
          config.user.useremail = email;
          console.log("Success Email Found in Driver Table");
          await sendForgetOTP(config.user.useremail, OTP1);
          return res.status(200).json({ message: "SuccessFull Driver Table" });
        } else {
          const user = await shipper.findOne({ email: email });
          config.user.useremail = email;
          if (user) {
            await sendForgetOTP(config.user.useremail, OTP1);
            console.log("Success Email Found In Shipper table");
            return res.status(200).json({ message: "SuccessFull Shipper Table" });
          } else {
            console.log("UnSuccessfull Email Not Found In Shipper or Driver table");
            return res
              .status(400)
              .json({ message: "UnSuccessFull No Email FOund" });
          }
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
}

module.exports = ForgetPassword;