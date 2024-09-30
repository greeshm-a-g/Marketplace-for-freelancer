import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cnavbar from './Cnavbar';

function Viewfreelancermsg() {
    const [messages, setMessages] = useState([]);
    const clientId = JSON.parse(localStorage.getItem('client')).clientId;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/${clientId}`)
            .then((result) => {
                setMessages(result.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const Payment = (freelancerId, projectId) => {
        localStorage.setItem('paymentData', JSON.stringify({ freelancerId, projectId, clientId }));
        navigate('/payment');
    };

    return (
<div>
<Cnavbar/><br></br>

        <div className="msgcontainer">
            {messages.length === 0 ? (
                <p className="no-messages">No messages</p>
            ) : (
                messages.map((message) => ( 
                    <div className="msgcard1" key={message._id}>
                   <p><strong>Project Title:</strong> {message.projectId.Title}</p>
                     
                     <p><strong>Category:</strong> {message.projectId.Category}</p>
                    <p><strong>Budget:</strong> {message.projectId.Budget}</p>

                   <div className="msgcard2">

                       <h2 style={{color:'#1A728E'}}>Freelancer Responses</h2>
                        <p><strong>Name:</strong>{message.freelancerId.Username}</p>
                         <p><strong>Skills:</strong> {message.freelancerId.Skills}</p>
                        <p><strong>Qualification:</strong> {message.freelancerId.Qualification}</p>
                        
                        <p><strong>Message:</strong> {message.message}</p>
                        <button style={{backgroundColor:'darkgreen',width:'100%',border:'none',borderRadius:'5px',height:'30px',color:'white'}}onClick={() => Payment(message.freelancerId._id, message.projectId?._id,message.clientId._id)}>Pay</button>
                    </div></div>
                ))
            )}
        </div></div>
    );
}

export default Viewfreelancermsg;
