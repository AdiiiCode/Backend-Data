require("dotenv").config();
const config = require("../Variables/var")
const Ship = require('../Models/ShipmentDetails')
const shipper = require("../Models/Shipper");

const PreviewShipper = async (req, res) => {
    try {
        const items = await Ship.findOne({Vin:config.shipment.VIN});
        console.log(items.Vin)
        console.log(config.shipment.VIN)

        console.log(items)
        // res.status(200).json({ message: 'Server ' });
        res.json(items);

    }

    catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
}
}
module.exports = PreviewShipper