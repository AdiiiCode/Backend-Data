const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
require("dotenv").config();
const OTP1 = randomstring.generate({
    length: 6,
    charset: "numeric",
  });
  async function sendForgetOTP(email, OTP1) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS_KEY,
      },
    });
    const mailOptions = {
      from: "Quick Transport Line",
      to: email,
      subject: "QTL OTP for Signup",
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2 style="color: #333;">We heard that you lost your QTL password. Sorry about that!</h2>
          <br/>
          <br/>
          <h2 style="color: #333;">But don't worry! You can use the following OTP to reset password</h2>
          <p style="font-size: 18px;">Your OTP for Forget is:</p>
          <p style="font-size: 28px; font-weight: bold; color: #007bff;">${OTP1}</p>
          <p style="font-size: 16px; color: #666;">Best Regards,</p>
          <p style="font-size: 16px; color: #666;">Quick Transport Line</p>
        </div>
      `,
    };
  
    await transporter.sendMail(mailOptions);
  }
  
  module.exports = { sendForgetOTP, OTP1}

