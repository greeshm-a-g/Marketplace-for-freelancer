import React, { useState } from 'react';
import Footer from '../Footer';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../../Component/Login.css";
import './Freelancer.css';

 function Freereg() {
  const [rfree, setrfree] = useState({ image: '', Username: '', Email: '', Gender: '', Qualification: '', JobRole: '', Skills:'',Password: '' });
  const navigate = useNavigate()
   const page = (b) => {
     const { name, value, files } = b.target;
     if (name === 'image') {
       setrfree(prevState => ({ ...prevState, image: files[0] }));
     } else {
       setrfree(prevState => ({ ...prevState, [name]: value }));
     }
   };

   const signfn = (x) => {
     x.preventDefault();

  
     axios.post('http://localhost:4000/adddetailsfree', rfree, {
       headers: {
         'Content-Type': 'multipart/form-data'
       }
     })
       .then((result) => {
         console.log('Response:', result);
         alert('Successful');
         navigate('/loginfree')

       })
       .catch((err) => {
        console.error('Error:', err);
        alert('Failed to register.');
       });
   };

   console.log(rfree);

   return (
     <div>
       <div className="container reg">
         <div className="login-form regform">
           <form onSubmit={signfn}>
             <h1 style={{ color: '#033949', fontSize: '30px', textAlign: 'center' }}>Freelancer Sign Up</h1><br /><br />
             <div className="row mb-3 col-12">
               <input className="form-control" type="file" id="formFileMultiple" onChange={page} name='image' />
               <br />
             </div>
             <div className="row mb-3 col-12">
               <label style={{ color: '#1A728E', fontSize: '20px', textAlign: 'left' }}></label>
               <input type="text" className="form-control" placeholder='Username' onChange={page} name='Username' value={rfree.Username} />
             </div>
             <div className="row mb-3 col-12">
               <label></label>
               <input type="email" className="form-control" placeholder='Email' onChange={page} name='Email' value={rfree.Email} />
             </div>
          <div className="row mb-3 col-12">
             <label style={{ color: '#1A728E', fontSize: '20px', textAlign: 'left' }}></label>
             <select className="form-control" id="sel1" onChange={page} name='Gender' value={rfree.Gender}>
               <option value="" disabled>Select Gender</option>
               <option value="Female">Female</option>
               <option value="Male">Male</option>
             <option value="Others">Others</option>
             </select>
            </div><br />
            <div className="row mb-3 col-12">
              <label style={{ color: '#1A728E', fontSize: '20px', textAlign: 'left' }}></label>
              <input type="text" className="form-control" placeholder='Qualification' onChange={page} name='Qualification' value={rfree.Qualification} />
            </div>
            <div className="row mb-3 col-12">
              <label style={{ color: '#1A728E', fontSize: '20px', textAlign: 'left' }}></label>
              <input type="text" className="form-control" placeholder='JobRole' onChange={page} name='Jobrole' value={rfree.Jobrole} />
            </div>
            <div className="row mb-3 col-12">
              <label style={{ color: '#1A728E', fontSize: '20px', textAlign: 'left' }}></label>
              <input type="text" className="form-control" placeholder='Skills' onChange={page} name='Skills' value={rfree.Skills} />
            </div>
            <div className="row mb-3 col-12">
              <label style={{ color: '#1A728E', fontSize: '20px', textAlign: 'left' }}></label>
              <input type="password" className="form-control" placeholder='Password' onChange={page} name='Password' value={rfree.Password} />
            </div>
            <div className="row mb-3 col-12">
              <div className="row mb-3 col-12">
                <button type='submit' className='btn-free' style={{ backgroundColor: '#033949', border: 'none' }}>Register</button>
              </div>
              <p style={{ textAlign: 'center' }}>Already have an account?</p>
              <Link to="/Loginfree" style={{ textAlign: 'center' }}>Login</Link>
            </div>
          </form>
        </div>
        <div className="image-section rightimg">
          <h1>THE <br /> GOAL OF <br />FREELANCING<br /> IS TO BE <br />FREE</h1>
        </div>
      </div>
      <Footer />
</div>
  );
}

export default Freereg;



