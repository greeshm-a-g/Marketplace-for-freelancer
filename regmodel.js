const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    CompanyName:{type:String},
    Email:{type:String},
    PhoneNumber:{type:Number},
    Password:{type:String},

    isActive:{
        type:Boolean,
        default:false}
    
    
})
module.exports=new mongoose.model("clientreg",userschema)