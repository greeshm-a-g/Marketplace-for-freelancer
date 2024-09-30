import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Fnavbar from './Fnavbar';

function Acceptedwork() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const freelancerId = JSON.parse(localStorage.getItem('freelancer')).freelancerId;
        if (!freelancerId) {
            console.error('error');
            return;
        }
        axios.get(`http://localhost:4000/payments/freelancer/${freelancerId}`)
            .then((response) => {
                setPayments(response.data.data); 
            })
            .catch((error) => {
                console.error('Error');
            });
    }, []);  

    return (
        <div>
                    <Fnavbar/><br></br>
                    <h1 style={{textAlign:'center',color:'#033949'}}>Acceptedwork</h1>
            <div className="msgcontainer">
         {payments.length === 0 ? (
                    <p>No payments found.</p>
                ) : (
            <div>
                 {payments.map(payment => (
                  <div className="msgcard1" key={payment._id}>
                               
                    <strong>Freelancer: {payment.freelancerId.Username}</strong>
                   <div className="msgcard2">
                   <p>Client: {payment.clientId.FirstName}</p>
                  <p>Project: {payment.projectId.Title}</p>
                    <p>Amount: {payment.Budget}</p>
                </div>
                     </div>
                     ))}
                 </div>
                )}
            </div>
        </div>
    );
}

export default Acceptedwork;
