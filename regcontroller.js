const user=require('./regmodel')

const adddetails=((req,res)=>{
    let regone=new user({
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        CompanyName:req.body.CompanyName,
        Email:req.body.Email,
        PhoneNumber:req.body.PhoneNumber,
        Password:req.body.Password,

       
    })

    regone.save()
    .then((result)=>{
        res.json({
            msg:result
        
    })
})
.catch((err)=>{
    console.log("error"+err)
})
})



//clientllogin
const loginclient = (req, res) => {
  const { Email, Password } = req.body;
  console.log("data", req.body);

  user.findOne({ Email: Email })
    .then((data) => {
      console.log("ad", data);

      if (!data) {
        console.log("User not found");
        return res.json({
          status: 400,
          msg: "User not found"
        });
      }

      if (!data.isActive) {
        console.log("User not approved");
        return res.json({
          status: 403,
          msg: "User not approved"
        });
      }

      if (Password == data.Password) {
        console.log("Login successfully");
        return res.json({
          status: 200,
          msg: "Login successfully",
          client:{
            clientId:data._id,
            FirstName:data.FirstName,
            LastName:data.LastName,
            CompanyName:data.CompanyName,
            Email:data.Email,
            PhoneNumber:data.PhoneNumber
           
        }
        });

      } else {
        console.log("Incorrect password");
        return res.json({
          status: 500,
          msg: "Incorrect password"
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.json({
        status: 400,
        msg: "User not found"
      });
    });
};

const viewallclient=((req,res)=>{
    user.find({isActive:false})   
    .then((result)=>{
        res.json({
            msg:"saved",
            data:result
        })
    }) 
        .catch((err)=>{
            console.log("error"+err)
        })
  
})
//Approve user
const approveclient = (req, res) => {
    user.findByIdAndUpdate({ _id: req.params.id }, { isActive: true })
   
      .then((result) => {
       res.json({
          status: 200,
          msg: result,
         
        })
   
    })
      .catch((error) => {
        console.log(error);
        res.json({
          status: 400,
          msg: "Approval Fail",
         
        })
   
  })
               }
//view approved user
const Viewacceptclient = (req, res) => {
    user.find({ isActive: true })
   
      .then((result) => {
       res.json({
          status: 200,
          msg: result,
          data:result
         
        })
   
    })
      .catch((error) => {
        console.log(error);
        res.json({
          status: 400,
         
        })
   
  })
}
//Delectuser
const removeclient = (req, res) => {
    user.findByIdAndDelete({ _id: req.params.id })
   
      .then((result) => {
       res.json({
          status: 200,
          msg: result,
         
        })
   
    })
      .catch((error) => {
        console.log(error);
        res.json({
          status: 400,
         
        })
   
  })  
}  
//update client


const updateclientprofile = (req, res) => {
  const { clientId, FirstName, LastName, CompanyName, Email, PhoneNumber } = req.body;
const updatedData = { FirstName, LastName, CompanyName, Email, PhoneNumber };

  user.findByIdAndUpdate(clientId, updatedData, { new: true })
    .then(updatedClient => {
     
      res.json({ status: 200, 
        msg: "Client updated successfully", client: updatedClient });
    })
    .catch(err => {
      console.error(err);
      res.json({ status: 500,
         msg: "Server error" });
    });
};


module.exports = { adddetails,loginclient,viewallclient,approveclient,Viewacceptclient,removeclient,updateclientprofile}
