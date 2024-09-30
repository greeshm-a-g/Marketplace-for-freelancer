import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Fnavbar from './Fnavbar';

function Viewfreelancer() {
  const [viewfree, setviewfree] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:4000/viewallfreelancer')
      .then((result) => {
        console.log(result);
        setviewfree(result.data.data);
        console.log(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Fnavbar/><br></br>
    <h1 style={{ textAlign: 'center', color: '#01495f' }}>Freelancers Detail</h1><br></br><br></br>
    <div className="main-content freelancercardalign">
      {
        viewfree.map((frelancerview) => (
          <div key={frelancerview._id} className="card freelancercard">
            <div className="summary">
              <div className="itemimg">
              <img src={'http://localhost:4000/uploads/' + frelancerview.image?.filename} alt="Freelancer" />
              </div>
              <div className="item">Name: {frelancerview.Username}</div>
              {/* <div className="item">Email: {frelancerview.Email}</div> */}
              <div className="item">Gender: {frelancerview.Gender}</div>
              <div className="item">Qualification: {frelancerview.Qualification}</div>
              <div className="item">JobRole: {frelancerview.Jobrole}</div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
  
  );
}

export default Viewfreelancer;
