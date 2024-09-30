import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Fnavbar from './Fnavbar';

function Updatefreeprofile() {
  const [Data, setData] = useState({Username: '',Qualification: '',Jobrole: '',Email: '',Skills: ''});
  const [freelancerId, setFreelancerId] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const freelancer = JSON.parse(localStorage.getItem('freelancer'));
    if (freelancer && freelancer.freelancerId) {
    setData({
        Username:freelancer.Username,
        Qualification:freelancer.Qualification,
    
      Jobrole: freelancer.Jobrole,
        Email:freelancer.Email,
        Skills: freelancer. Skills
    });
      setFreelancerId(freelancer.freelancerId);
    }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,[name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
axios.post(`http://localhost:4000/updateprofile/${freelancerId}`, Data)
      .then((result) => {
      if (result.data.status === 200) {
          localStorage.setItem("freelancer", JSON.stringify(result.data.freelancer));
          alert("Profile updated successfully")
          navigate('/freelancerprofile ')

        } else {
          alert("Failed")
        }
      })
      
  };

  return (
    <div>
      <Fnavbar/>
       <div className="profile-container">       
       <div className="header">
        <div className="profile-info">
      <h1>Update Freelancer Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input className="form-control"type="text"name="Username"value={Data.Username}onChange={onChange}/>
        </div><br></br>
        <div>
          <label>Qualification:</label>
                <input className="form-control"type="text"name="Qualification"value={Data.Qualification}onChange={onChange}/>
        </div><br></br>
        <div>
          
           <label>Job Role:</label>
              <input className="form-control"type="text"name="Jobrole"value={Data.Jobrole}onChange={onChange} />
        </div><br></br>
        <div>
          <label>Email:</label>
             <input className="form-control"type="email"name="Email"value={Data.Email}onChange={onChange}/>
               </div><br></br>
        <div>
          <label>Skills:</label>
          <input className="form-control"type="text" name="Skills" value={Data.Skills} onChange={onChange}/>
        
        </div><br></br>
        <button style={{ backgroundColor: 'darkgreen', border: 'none', borderRadius: '10px', height: '40px', color: 'white' }}
type="submit">Update Profile</button>
      </form>
    </div></div>
    </div>
    </div>
  );
}

export default Updatefreeprofile;
