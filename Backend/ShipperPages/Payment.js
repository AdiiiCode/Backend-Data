require("dotenv").config();
const config = require("../Variables/var");
const Ship=require('../Models/ShipmentDetails')
const PaymentShipper = async(req,res)=>
{
    const {PTC, COD_P, Balance, COD_P_Method, COD_P_Loc , BPM, BPT, BPTerm,CCC} = req.body;
    try {

       if(CCC === 1)
        {
            console.log("COD_P === NULL");
            config.Payment.Pay_Carrier = PTC;
            config.Payment.COD_COP = COD_P;
            config.Payment.Balance = Balance;
            config.Payment.BP_Method = BPM;
            config.Payment.BP_Time = BPT;
            config.Payment.BP_Terms = BPTerm;
            config.Payment.COD_COP_Method = "";
            config.Payment.COD_COP_Location = "";
        }
   else if(PTC - COD_P > 0)
    {
        console.log("COD_P - PTC > 0");
        config.Payment.Pay_Carrier = PTC;
        config.Payment.COD_COP = COD_P;
        config.Payment.Balance = Balance;
        config.Payment.BP_Method = BPM;
        config.Payment.BP_Time = BPT;
        config.Payment.BP_Terms = BPTerm;
        config.Payment.COD_COP_Method = COD_P_Method;
        config.Payment.COD_COP_Location = COD_P_Loc;
    }
    else{
        console.log("COD_P - PTC === Negetive");

        config.Payment.Pay_Carrier = PTC;
        config.Payment.COD_COP = COD_P;
        config.Payment.Balance = Balance;
        config.Payment.COD_COP_Method = COD_P_Method;
        config.Payment.COD_COP_Location = COD_P_Loc;
        config.Payment.BP_Method = "";
        config.Payment.BP_Time = "";
        config.Payment.BP_Terms = "";
}
const newShipment=new Ship({
    id:config.user.Uid,
    Location:config.shipment.Pickup,
    Destination:config.shipment.Destination,
    Number:config.shipment.PhoneNumber,
    TransportType:config.shipment.TransportType,
    Year:config.shipment.Year,
    Make:config.shipment.Make,
    Model:config.shipment.Model,
    Vin:config.shipment.VIN,
    Operatble:config.shipment.isOperable,
    From:  config.shipment.DataOfShipmentFrom,
    To:  config.shipment.DataOfShipmentTo,
    PTC:config.Payment.Pay_Carrier,
    COD_P:config.Payment.COD_COP ,
    Balance: config.Payment.Balance,
    BPM: config.Payment.BP_Method,
    BPT: config.Payment.BP_Time,
    BPTerm:config.Payment.BP_Terms,
    COD_P_Method:config.Payment.COD_COP_Method, 
    COD_P_Loc: config.Payment.COD_COP_Location,
})
await newShipment.save();
    res.status(200).json({message: "data Saved Ok!!"});
    console.log(config.Payment.BP_Terms, config.Payment.COD_COP_Method);
    console.log(Balance);
    } catch (error) {
        // console.log(config.Payment.Pickup, config.Payment.Destination);
        console.log("Error idhhar hai bhaii")
    return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = PaymentShipper;