const express=require("express")
const Router=express.Router()
const user=require("./regcontroller")
const freelancer=require("./freereg/freelancercontroller")
const addrequest=require("./addreqquest/addrequestcontroller")
const freelancermsg = require("./message/messagecontroller")
const payment = require("./payment/paymentcontroller")
//Admin
Router.post('/adddetails',user.adddetails)
Router.get('/viewallclient',user.viewallclient)
Router.post('/approveclient/:id',user.approveclient)
Router.post('/removeclient/:id',user.removeclient)
Router.get('/Viewacceptclient',user.Viewacceptclient)

//client
Router.post('/addrequest/:id',addrequest.addrequest)
Router.get('/myrequest',addrequest.myrequest)
Router.post('/loginclient',user.loginclient)
Router.post('/adddetails',user.adddetails)
// Router.get('/freelancerresponse/:id',freelancermsg.freelancerresponse)
Router.post('/updateclientprofile',user.updateclientprofile)


//freelancer
Router.post('/adddetailsfree',freelancer.upload,freelancer.adddetails)
Router.post('/login',freelancer.login)
Router.post('/viewallfreelancer',freelancer.viewallfreelancer)
Router.post('/updateProfile/:id', freelancer.updateProfile)
Router.post('/message/:id',freelancermsg.message)
// Router.get('/messages/client/:clientId', freelancermsg.Messagesviewbyclient);
Router.get('/:clientId', freelancermsg.Messagesviewbyclient);
Router.post('/createPayment',payment.createPayment)
Router.get('/payments/freelancer/:freelancerId', payment.viewpaymentfreelancer);
module.exports=Router