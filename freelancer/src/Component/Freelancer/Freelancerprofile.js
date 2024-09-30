import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { GrConnect } from "react-icons/gr";
import Fnavbar from './Fnavbar';

function Freelancerprofile() {
  const [freelancer, setFreelancer] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const freelancerId = JSON.parse(localStorage.getItem('freelancer'));
    if (freelancerId) {
      setFreelancer(freelancerId);
    }
  }, []);
  const handleEditClick = () => {
    navigate('/updatefreeprofile'); 
  };
  return (
    <div>
     <Fnavbar/><br></br>
      <div className="profile-container">
        <div className="header">
          <div className="profile-info">
            {freelancer ? (
              <div className='row'>
              <div className="col-6">
              <img src={'http://localhost:4000/uploads/' + freelancer.image?.filename} alt="Freelancer"   className="profile-picfree" />
              
                <h2>{freelancer.Username}</h2>
                <h6>{freelancer.Qualification}</h6>
                <h6>{freelancer.Jobrole}</h6>
                <h6>{freelancer.Email}</h6>
                <h2 style={{ color: '#033949', fontFamily: 'fantasy' }}>Skills</h2>
                <h6>{freelancer.Skills}</h6>
                </div>
                <div style={{textAlign:"right"}}className="col-6"><GrConnect style={{height:'25px',width:'25px'}}/> <br></br>
                <p>Connect<br></br>Top Rated</p></div>
                </div>
            ) : (
              <Link></Link>
            )}
            <br />
            <div className="row">
              <div className="col-6">
                <button style={{ backgroundColor: 'darkgreen' ,color:'white'}} onClick={handleEditClick} className="form-control">Edit Profile</button>
              </div>
              <div className="col-6">
                <input style={{ borderBlockColor: 'darkgreen' }} className="form-control" type="file" id="formFileMultiple" />
              </div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Freelancerprofile;
