const freelancer=require('./freelancermodel')

const multer=require("multer")
const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage}).single('image')
const adddetails=((req,res)=>{
    let regone=new freelancer({
        image:req.file,
        Username:req.body.Username,
        Email:req.body.Email,
        Gender:req.body.Gender,
        Qualification:req.body.Qualification,
        Jobrole:req.body.Jobrole,
        Skills:req.body.Skills,
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


const login=((req,res)=>
    {
        let Email=req.body.Email
        let password=req.body.Password
        freelancer.findOne({Email:Email})
        .then((result)=>{
           if(password==result.Password){
            res.json({
                status:"200",
                msg: "Login Successfull",
                freelancer:{
                    freelancerId:result._id,
                    image:result.image,
                    Username:result.Username,
                    Qualification:result.Qualification,
                    Jobrole:result.Jobrole,
                    Email:result.Email,
                    Skills:result.Skills
                }
            })
            
           }
           else{
            res.json({
                status:"500",
                msg:"Password error"
            })
           }
        
        })
            .catch((err)=>{
                res.json({
                status:"400",
                msg:"user not found"
                })
            })
              })
//view
const viewallfreelancer=((req,res)=>{
    freelancer.find({})   
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


//freelancer update
const updateProfile = (req, res) => {
    freelancer.findByIdAndUpdate(
      { _id: req.params.id }, 
      {
        Username: req.body.Username,
        Qualification: req.body.Qualification,
        Jobrole: req.body.Jobrole,
        Email: req.body.Email,
        Skills: req.body.Skills
      },
      { new: true } 
    )
      .then((updatedFreelancer) => {
        if (updatedFreelancer) {
          res.json({
            status: 200,
            freelancer: updatedFreelancer
          });
        } 
      })
    
  };
  


  
module.exports = { upload,adddetails,login,viewallfreelancer,updateProfile}
