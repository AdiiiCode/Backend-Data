require("dotenv").config();
const config =  require("../Variables/var")

const Navbar = async (req, res) => {
  try {
    res.status(200).json({
      callusername: config.user.loggedInUsername,
      name: config.user.Lastname,
    });
  } catch (err) {
    console.log("acha");
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = Navbar;
