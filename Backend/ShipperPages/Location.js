require("dotenv").config();
const config = require("../Variables/var")


const Location = (req,res)=>
{
    const {pickup_location, destinationLoc, Phonenumber, TT } = req.body;
    try {
    config.shipment.Pickup = pickup_location;
    config.shipment.Destination = destinationLoc;
    config.shipment.PhoneNumber = Phonenumber;
    config.shipment.TransportType = TT;
    res.status(200).json({message: "data Saved Ok!!"});
    console.log(config.shipment.Pickup, config.shipment.Destination);
    console.log(pickup_location);
    } catch (error) {
        console.log(config.shipment.Pickup, config.shipment.Destination);
        console.log("Error idhhar hai bhaii")
    return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = Location;