require("dotenv").config();
const bcrypt = require("bcrypt");
const shipper = require("../Models/Shipper");
const driver = require("../Models/Driver");
const config =  require("../Variables/var")
const MyProfile = async (req, res) => 
{
    try {
        res.status(200).json({
          Fname: config.user.loggedInUsername,
          Lname: config.user.Lastname,
          email: config.user.useremail,
          password: config.user.userPassword,
          bussiness: config.user.userbusiness,
        });
      } catch (err) {
        console.log("acha");
        res.status(500).json({ error: "Internal server error" });
      }
};

module.exports = MyProfile;
