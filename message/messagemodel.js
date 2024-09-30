 const mongoose=require("mongoose")
const msgschema=new mongoose.Schema({

            
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


      

},{timestamps:true})
 module.exports=new mongoose.model("freelancerrequests",msgschema)



