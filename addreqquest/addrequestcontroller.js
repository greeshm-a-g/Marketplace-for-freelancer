const request = require('./addrequestmodel');
const addrequest = (req, res) => {
    let requestone = new request({
        Category: req.body.Category,
        Title: req.body.Title,
        Deadline: req.body.Deadline,
        Contactinformation: req.body.Contactinformation,
        Budget: req.body.Budget,
        Description: req.body.Description,
        clientId: req.body.clientId, 


    });

    requestone.save()
        .then((result) => {
            res.json({ msg: result });
        })
        .catch((err) => {
            console.log("error" + err);
        });
};

//view
const myrequest=((req,res)=>{
    request.find({})   
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








module.exports = { addrequest,myrequest };