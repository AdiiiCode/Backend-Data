const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
require("dotenv").config();
const otp = randomstring.generate({
    length: 6,
    charset: "numeric",
  });
  async function sendOTPEmail(email, otp) {
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
          <h2 style="color: #333;">Thank You For Using Our Services</h2>
          <p style="font-size: 18px;">Your OTP for signup is:</p>
          <p style="font-size: 28px; font-weight: bold; color: #007bff;">${otp}</p>
          <p style="font-size: 16px; color: #666;">Best Regards,</p>
          <p style="font-size: 16px; color: #666;">Quick Transport Line</p>
        </div>
      `,
    };
  
    await transporter.sendMail(mailOptions);
  }
  
  module.exports = { sendOTPEmail, otp}

