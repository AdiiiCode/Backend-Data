const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { abcd, validate } = require("./Middlewares/Validate");
const { efgh, validate2 } = require("./Middlewares/PasswordChangeValidate");
const Location = require("./ShipperPages/Location");
const Login = require("./Routes/Login");
const SignUp = require("./Routes/Signup");
const OTPFile = require("./Routes/OTP");
const ForgetPassword = require("./Routes/ForgetPassword");
const ForgetOTP = require("./Routes/Forget-OTP");
const Navbar = require("./Routes/Navbar");
const ChangePassword = require("./Routes/Change-Password");
const MyProfile = require("./Routes/MyProfile");
const Dest = require("./ShipperPages/Destination");
const DataofShipment = require("./ShipperPages/Shipment-Date");
const PaymentShipper = require("./ShipperPages/Payment");
const PreviewShipper = require("./ShipperPages/Preview");
const DriverNoti=require("./ShipperPages/DriverNoti")


require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on Port 5000`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.post("/", Login);

app.post("/Signup", abcd, validate, SignUp);

app.post("/OTP", OTPFile);

app.post("/ForgetPassword", ForgetPassword);

app.post("/Forget-OTP", ForgetOTP);

app.post("/Change-Password", efgh , validate2, ChangePassword);

app.get("/Navbar", Navbar);

app.get("/MyProfile", MyProfile);

app.post("/PostShipment", Location);

app.post("/Dest", Dest);

app.post("/Shipment-Date", DataofShipment);

app.post("/Payment", PaymentShipper);

app.get("/Preview",PreviewShipper)

app.get("/DriverNoti",DriverNoti)

