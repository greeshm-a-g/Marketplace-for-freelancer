
const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({
    Name: { type: String },
    CardNumber: { type: String },
    ExpMonthYear: { type: String },
    CVCNumber: { type: String},
    Budget: { type: Number},
    freelancerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "freelancerreg",
      },
      message: String,

clientId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "clientreg",
},

projectId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects",
},
}, { timestamps: true });

   module.exports=new mongoose.model("payment",paymentSchema)
