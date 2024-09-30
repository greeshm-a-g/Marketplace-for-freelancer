import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cnavbar from './Cnavbar';

function UpdateClient() {
  const [client, setClient] = useState({FirstName: '',LastName: '',CompanyName: '',Email: '',PhoneNumber: '',clientId: '',  });
  const navigate = useNavigate();

  useEffect(() => {
    const Client = JSON.parse(localStorage.getItem('client'));
    if (Client) {
      setClient(Client);  
    }
  }, []);

  const onChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/updateclientprofile', client)
      .then((result) => {
        if (result.data.status === 200) {
          localStorage.setItem('client', JSON.stringify(result.data.client)); 
          alert('Profile updated successfully');
          navigate('/userprofile');
        } else {
          alert('Error updating profile');
        }
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('Server error');
      });
  };

  return (
    <div>
      <Cnavbar /><br></br>
      <div className="profile-container">       
       <div className="header">
        <div className="profile-info">        
          <h1 style={{textAlign:'center',color:'#0c637d'}}>Update Profile</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="FirstName" className="form-control" value={client.FirstName} onChange={onChange} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="LastName" className="form-control" value={client.LastName} onChange={onChange} />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" name="CompanyName" className="form-control" value={client.CompanyName} onChange={onChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="Email" className="form-control" value={client.Email} onChange={onChange} />
          </div><br></br>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="PhoneNumber" className="form-control" value={client.PhoneNumber} onChange={onChange} />
          </div>   <br></br>          
           <div className="row mb-3 ">
            <button style={{ backgroundColor: '#0c637d', border: 'none', borderRadius: '10px', height: '40px', color: 'white'}}type="submit" className="btn btn-primary">Update Profile</button>
       </div> </form>
      </div>
    </div></div></div>
  );
}

export default UpdateClient;
