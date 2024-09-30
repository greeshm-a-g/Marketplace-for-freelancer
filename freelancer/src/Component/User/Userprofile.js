import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Cnavbar from './Cnavbar';
import { GrConnect } from "react-icons/gr";
import { Navigate, useNavigate } from 'react-router-dom'

function UserProfile() {
  const [client, setclient] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const clientId = JSON.parse(localStorage.getItem('client'));
    if (clientId) {
      setclient(clientId);
    }
  }, []); 
   const handleEditClick = () => {
    navigate('/updateclient'); 
  };
  return (
    <div>  
            <Cnavbar/>

      <div className="profile-container">
    <div className="header">
      <div className="profile-info">
         {client ? (
            <div className='row'>
            <div className="col-6">

           <h6>{client.FirstName}</h6>
           <h2>{client.LastName}</h2>
           <h6>{client.CompanyName}</h6>
           <h6>{client.Email}</h6>
           <h6>{client.PhoneNumber}</h6>
            </div>
           <div style={{textAlign:"right"}}className="col-6"><GrConnect style={{height:'25px',width:'25px'}}/> <br></br>
           <p>Connect<br></br>Top Rated</p>
          </div></div>
              ) : (
                <Link></Link>
              )}
      </div>  <div className="row">
      <div className="col-6">
                <button style={{ backgroundColor: 'darkgreen' ,color:'white'}} onClick={handleEditClick} className="form-control">Edit Profile</button>
              </div>
              <div className="col-6">
                <input style={{ borderBlockColor: 'darkgreen' }} className="form-control" type="file" id="formFileMultiple" />
              </div></div></div></div> 
          
    </div>
  );
}

export default UserProfile;
