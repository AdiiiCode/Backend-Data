
require("dotenv").config();
const config = require("../Variables/var")
const Dest = (req,res)=>
{
    const {year, make, model, vin, operable } = req.body;
    try {
   config.shipment.Year = year;
   config.shipment.Model = model;
   config.shipment.Make = make;
   config.shipment.VIN = vin;
   config.shipment.isOperable = operable;
    res.status(200).json({message: "data Saved Ok!!"});
    console.log(process.env.Year, config.shipment.Model);
    console.log(vin);
    } catch (error) {
        // console.log(process.env.Pickup,config.shipment.Destination);
        console.log("Error idhhar hai bhaii")
    return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = Dest;