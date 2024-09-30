const freelancermsg = require('./messagemodel');
const message = (req, res) => {
    let messagereq = new freelancermsg({
        message: req.body.message,
        freelancerId: req.params.id,
        clientId: req.body.clientId, 
        projectId: req.body.projectId
    });

    messagereq.save()
        .then((result) => {
            res.json({ msg: result });
        })
        .catch((err) => {
            console.log("error" + err);
        });
};

// view freelancerresponse id

// const freelancerresponse = (req, res) => {
//     const clientId = req.params.clientId;
//     freelancermsg.find({ clientId: clientId })
//         .populate('freelancerId', 'Username Email') 
//         .then((messages) => {
//             res.json({ data: messages });
//         })
//         .catch((err) => {
//             console.log("error: " + err);
//             res.status(500).json({ error: err.message });
//         });
// };


const Messagesviewbyclient = (req, res) => {
    const clientId = req.params.clientId;
    
    freelancermsg.find({ clientId: clientId })
        .populate('freelancerId', 'Username Skills Qualification')
          .populate('projectId', 'Title Category Budget') 
        .then((message) => {
            res.json({ data: message});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json
            ({ msg: "Error" });
        });
};




module.exports = {message ,Messagesviewbyclient};
