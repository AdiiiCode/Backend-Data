require("dotenv").config();
const config = require("../Variables/var")
const Ship = require('../Models/ShipmentDetails')
const DriverNoti = async (req, res) => {
    try {
        const items = await Ship.find();
        console.log(items)
        res.json(items);
    }

    catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
}
}
module.exports = DriverNoti
