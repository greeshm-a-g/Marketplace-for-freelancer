import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cnavbar from './Cnavbar';
import payment from "../../Image/pay.gif"

function Payment() {
    const [data, setData] = useState({Name: '',CardNumber: '',ExpMonthYear: '',CVCNumber: '',Budget: '' });

    const navigate = useNavigate();

    // useEffect(() => {
    //     const paymentData = JSON.parse(localStorage.getItem('paymentData'));
    //     if (!paymentData) {
    //         alert('Failed');
    //     }
    // }, []);

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const signfn = (e) => {
        e.preventDefault();
        const paymentData = {...data,
            freelancerId: JSON.parse(localStorage.getItem('freelancer')).freelancerId,
            
            projectId: JSON.parse(localStorage.   getItem('paymentData')).projectId,
              clientId: JSON.parse(localStorage.getItem('client')).clientId
        };

        axios.post('http://localhost:4000/createPayment', paymentData)
            .then((result) => {
                // console.log('Response:', result);
                alert('Payment done successfully');
                navigate('/Chome');

            })
            .catch((err) => {
                console.error('Error:', err);
                alert('Payment failed');
            });
    };

    return (
        <div><Cnavbar/><br></br>
        <div className='row'>
             <div className="col-6">
             <img style={{marginLeft:'100px',marginTop:'100px'}}src={payment}  />
             </div>
            <div className='col-6'>
            <div className="payment-container">
                <form onSubmit={signfn}>
                 <h2>Cardholder's Name</h2>
                <input className='form-control' type="text" placeholder='Enter cardholder name' onChange={onChange} name='Name' value={data.Name} /><br/>
                   
                    <h2>Card Number</h2>
                <input className='form-control' type="text" placeholder="Enter card number" onChange={onChange} name='CardNumber' value={data.CardNumber} /><br/>
                     <div className="row">
                        <div className="column">
                     <h2>Exp Month & Year</h2>
                        <input className='form-control' type="month" placeholder="MM/YYYY" onChange={onChange} name='ExpMonthYear' value={data.ExpMonthYear} />
                    </div>
                    <div><br />
                        <h2>CVC Number</h2>
                        <input className='form-control'type="text" placeholder="Enter CVC" onChange={onChange} name='CVCNumber' value={data.CVCNumber} /><br/>
                        </div>
                     
                     
                     <div>
                         <h2>Budget</h2>
                        <input className='form-control' type="number" placeholder="Budget" onChange={onChange} name='Budget' value={data.Budget} />
                    </div>
                            </div><br /><br />
                        <button className="btnpayment" type="submit">Pay</button>
                 </form></div>
                    </div>
                </div>
        </div>
    );
}

export default Payment;
