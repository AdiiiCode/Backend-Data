const mongoose = require('mongoose');

const ShipmentDetails = new mongoose.Schema({
  id:{
    type:String,
    required: true,
  },
    Location: {
        type: String,
        required: true,
      },
      Destination: {
        type: String,
        required: true,
      },
      Number: {
        type: String,
        required: true,
      },
      TransportType: {
        type: String,
        required: true,
      },
      Year: {
        type: String,
        required: true,
      },
      Make: {
        type: String,
        required: true,
      },
      Model: {
        type: String,
        required: true,
      },
      Vin: {
        type: String,
        required: true,
      },
      Operatble: {
        type: String,
        required: true,
      },
      To: {
        type: Date,
        required: true,
      },
      From: {
        type: Date,
        required: true,
      },
      PTC: {
        type: Number,
      },
      COD_P: {
        type: Number,
      },
      Balance: {
        type: Number,
      },
      BPM: {
        type: Number,
      },
      BPT: {
        type: Number,
      },
      BPTerm: {
        type: Number,
      },
      COD_P_Method: {
        type: Number,
      },
      COD_P_Loc: {
        type: Number,
      },

      
      
 
});

const Ship = mongoose.model('Car', ShipmentDetails);

module.exports = Ship;