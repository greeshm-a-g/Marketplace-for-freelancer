// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function ViewClientMessages() {
//     const [messages, setMessages] = useState([]);
//     const clientId = JSON.parse(localStorage.getItem('client')).clientId;
//     const navigate = useNavigate(); 

//     useEffect(() => {
//         axios.get(`http://localhost:4000/messages/client/${clientId}`)
//             .then((result) => {
//                 setMessages(result.data.data);
//             })
//             .catch((error) => {
//                 console.error( error);
//             });
//     }, []);

//     const Payment = (freelancerId, projectId) => {
//         localStorage.setItem('paymentData', JSON.stringify({ freelancerId, projectId, clientId }));
//         navigate('/payment');
//     };

//     return (
//         <div>
//             <h1>Freelancer Messages</h1>
//             {messages.length === 0 ? (
//                 <p>No messages found</p>
//             ) : (
//                 <table>
//                 <thead>
//                     <tr>
//                     <th>Username</th>
//                     <th>Skills</th>
//                         <th>Qualification</th>
//                     <th>Message</th>
//                     <th>Project Title</th>
                    
//                     <th>Action</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                         {messages.map((message) => (
//                             <tr key={message._id}>
//                             <td>{message.freelancerId.Username}</td>
//                                 <td>{message.freelancerId.Skills}</td>
//                             <td>{message.freelancerId.Qualification}</td>
//                             <td>{message.message}</td>
//                             <td>{message.projectId ? message.projectId.Title : 'No Title'}</td>
                               
//                                 <td>
//             <button onClick={() => Payment(message.freelancerId._id, message.projectId?._id)}>Pay</button>
//                         </td>
//                     </tr>
//                     ))}
//                 </tbody>
//                 </table>
           
//            )}
//     </div>
//  );
// }

// export default ViewClientMessages;
