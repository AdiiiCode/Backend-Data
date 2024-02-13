const bcrypt = require("bcrypt");
const shipper = require("../Models/Shipper");
const driver = require("../Models/Driver");
const config = require("../Variables/var");

const Login = async (req,res)=>
{
    const { username, password } = req.body;
    try {
      let user = await shipper.findOne({ email: username });
      if (!user) {
        user = await driver.findOne({ email: username });
        console.log("Driver Found");
        config.user.Uid=user._id;
      }
      if (!user) {
        console.log("User not found");
        return res.status(400).json({ error: "User not found" });
      }
      const passwordCom = await bcrypt.compare(password, user.Password);
      if (!passwordCom) {
        console.log("Incorrect password");
        return res.status(400).json({ error: "Incorrect password" });
      }
  
      console.log("Correct Password");
      config.user.Uid=user._id;
      let dashboardRoute;
      if (user instanceof shipper) {
        dashboardRoute = "Interface";
        config.user.loggedInUsername = user.Fname;
        config.user.Lastname = user.Lname;
        config.user.useremail = user.email;
        config.user.userPassword = user.Password;
        config.user.userbusiness = user.Business;
      } else if (user instanceof driver) {
        dashboardRoute = "DriverDashboard";
        config.user.loggedInUsername = user.Fname;
        config.user.Lastname = user.Lname;
      }
      return res.status(200).json({ dashboardRoute: dashboardRoute });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = Login;