const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    Category:{type: String },
    Title:{type: String },
    Deadline:{type: Date }, 
    Contactinformation:{type: String },
    Budget:{type: Number },
    Description:{type: String },
  freelancerId:{
    type:mongoose.Types.ObjectId,
    ref:'freelancerreg'
  },
  clientId:{
    type:mongoose.Types.ObjectId,
    ref:'clientreg'
  },
  status:{
    type:Boolean,
    default:true},
    isActive:{
      type:Boolean,
      default:false}
});




module.exports = mongoose.model("projects", userschema);
