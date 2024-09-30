const mongoose=require("mongoose")

const productschema=new mongoose.Schema({
    image:{type:Object},
    Username:{type:String},
    Email:{type:String},
    Gender:{type:String},
    Qualification:{type:String},
    Jobrole:{type:String},
    Skills:{type:String},
    Password:{type:Number}
   
 
})
module.exports=new mongoose.model("freelancerreg",productschema)