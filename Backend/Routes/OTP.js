
// require("dotenv").config();
const bcrypt = require("bcrypt");
const shipper = require("../Models/Shipper");
const driver = require("../Models/Driver");
const config =  require("../Variables/var")

const OTPFile = async (req,res)=>
{
    try {
        const { otp } = req.body;
        console.log(otp)
        console.log(config.user.otp)
        if (otp !== config.user.otp) {
          return res.status(400).json({ error: "Invalid OTP" });
        }
    
        if (config.user.Option === "Driver") {
          const salt = await bcrypt.genSalt(10);
          const Encrypted = await bcrypt.hash(config.user.Password, salt);
          const Logged = new driver({
            Fname: config.user.Fname,
            Lname: config.user.Lname,
            email: config.user.email,
            Business: config.user.Business,
            Company: config.user.Company,
            Password: Encrypted,
            Option: config.user.Option,
            otp: config.user.otp,
          });
          await Logged.save();
          console.log("Data Saved to Driver Table in MongoDB");
        } else if (config.user.FnameOption === "Shipper") {
          const Logged = new shipper({
            Fname: config.user.Fname,
            Lname: config.user.Lname,
            email: config.user.email,
            Business: config.user.Business,
            Company: config.user.Company,
            Password: config.user.Password,
            Option: config.user.Option,
            otp: config.user.otp,
          });
          await Logged.save();
          console.log("Data Saved to Shipper Table in MongoDB");
        } else {
          return res.status(401).json({ message: "Inavlid OTP" });
        }
        config.user.tempSignupData = {};
    
        return res.status(200).json({ message: "Signup successful" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
      }
}

module.exports = OTPFile;