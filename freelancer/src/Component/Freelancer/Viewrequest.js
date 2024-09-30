import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Fnavbar from './Fnavbar';

function Viewrequest() {
  const [data, setdata] = useState({ message: '' });
  const freelancerId = JSON.parse(localStorage.getItem('freelancer'));
  const clientId = JSON.parse(localStorage.getItem('client'));
  
  const onChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const [myrequest, setmyrequest] = useState([]);  

  const getAlluserReqs = () => {
    axios.get(`http://localhost:4000/myrequest`)
      .then((result) => {
        setmyrequest(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAlluserReqs();
  }, []);

  const signfn = (e, projectId) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/message/${freelancerId.freelancerId}`, {
      message: data.message,
      clientId: clientId.clientId,
      projectId: projectId
    })
      .then((result) => {
        console.log('Response:', result);
        alert('Message sent successfully');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message.');
      });
  };
  

  return (
    <div>
     <Fnavbar/>
      <div className="container-fluid bg-light" style={{ minHeight: "0" }}>
        <h1 className="table-heading text-dark m-5 text-center mt-5">
          Users Work Requests
        </h1>                
        <form onSubmit={signfn}>
          <table className="table table-hover">
          <tbody className="text-center">
          <thead>
      <th>Category</th>
      <th>Title</th>
      <th>Description</th>
      <th>Deadline</th>
      <th>Budget</th>
      <th>Contactinformation</th>
      <th>Send Message</th>
  {myrequest.map((request, index) => (
    

    <tr key={request._id}>
      <td>{request.Category}</td>
      <td>{request.Title}</td>
      
      <td>{request.Description}</td>
         <td>{request.Deadline}</td>
      <td>{request.Budget}</td>
      <td>{request.Contactinformation}</td>
      <td>
        <div data-mdb-input-init className="form-outline">                
          <label></label>
          <input type="text" className="form-control inputblur " placeholder='Message' onChange={onChange} name='message' value={data.message} />
        </div><br></br>
        <button 
          type='button' className='btn-free' onClick={(e) => signfn(e, request._id)} > Send</button>
      </td>
    </tr>
  ))}</thead>
</tbody>

          </table>
        </form>
      </div>
    </div>
  );
}

export default Viewrequest;
