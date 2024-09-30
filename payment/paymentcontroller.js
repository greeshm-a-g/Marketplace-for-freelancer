const Payment = require('./paymentmodel');

const createPayment = (req, res) => {
    let newPayment = new Payment({
        Name: req.body.Name,
        CardNumber: req.body.CardNumber,
        ExpMonthYear: req.body.ExpMonthYear,
        CVCNumber: req.body.CVCNumber,
        Budget: req.body.Budget,
          freelancerId: req.body.freelancerId,
          projectId: req.body.projectId,
          clientId: req.body.clientId
    });
newPayment.save()
  .then((result) => {
            res.json({
                message: 'Payment successfully done',
                data: result
            });
        })
        // .catch((err) => {
        //     console.error('Error processing payment:', err);
        //     res.status(500).json({
        //         message: 'Failed to process payment',
        //         error: err.message
        //     });
        // });
};

// paymentfreelancer
const viewpaymentfreelancer = (req, res) => {
    const freelancerId = req.params.freelancerId;

    Payment.find({ freelancerId })
    .populate('freelancerId', 'Username')

        .populate('clientId', 'FirstName')
        .populate('projectId', 'Title Budget')
        .then((payments) => {
            if (payments.length === 0) {
                return res.status(404).json({ });
            }
            res.json({ data: payments });
        })
        .catch((err) => {
            console.error(' err');
            res.status(500).json({ err });
        });
};




module.exports = {createPayment,viewpaymentfreelancer};
