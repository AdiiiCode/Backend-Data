
require("dotenv").config();
const config = require("../Variables/var")
const DataofShipment = (req,res)=>
{
    const {From, To } = req.body;
    try {
    config.shipment.DataOfShipmentFrom = From;
    config.shipment.DataOfShipmentTo = To;
   
    res.status(200).json({message: "data Saved Ok!!"});
    console.log(config.shipment.DataOfShipmentFrom, config.shipment.DataOfShipmentTo);
    } catch (error) {
        console.log("Error idhhar hai bhaii")
    return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = DataofShipment;