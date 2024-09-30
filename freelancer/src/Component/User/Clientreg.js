import React, { useState, useEffect } from 'react'
import "../../Component/Signup.css"
import logo from "../../Image/gro-icons_connect.png"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import'./Client.css'
function Clientreg() {
    const[data,setdata]=useState({FirstName:'',LastName:'',CompanyName:'',Email:'',PhoneNumber:'',Password:''})
    const navigate = useNavigate()

    const onChange=(a)=>{
      
        setdata({...data,[a.target.name]:a.target.value})
    }
    useEffect(()=>{
        console.log(data)
    })
    console.log(data)
    const signfn=(x)=>{
        x.preventDefault()
        axios.post('http://localhost:4000/adddetails',data)
        .then((result) => {
            console.log('Response:', result);
            alert('Successful');
            navigate('/Loginuser')

          })
          .catch((err) => {
            console.error('Error:', err);
            alert('Failed to register.');
          });
      };
    
      console.log(data);
  return (
    <div>
        <div className='img'>
     <div class="position-absolute top-0 start-50 translate-middle-x" style={{color:'white',fontSize:'40px'}}>connect
     <img src={logo}/>
     </div><br></br>
     <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card userblur" >
          <div class="row">
            <form onSubmit={signfn}>
            <h1 style={{color:'white',fontSize:'30px',textAlign:"center"}}>Client Sign Up</h1><br></br><br></br>
        <div class="row">
            <div class="col-md-6 mb-4">
            <div data-mdb-input-init class="form-outline">                
                <label ></label>
                <input type="text" className="form-control inputblur" placeholder='FirstName' onChange={onChange} name='FirstName' value={data.FirstName} ></input>
            </div>
            </div>
            <div class="col-md-6 mb-4">
            <div data-mdb-input-init class="form-outline">                
                <label style={{}}></label>
                <input type="text" class="form-control inputblur" placeholder='LastName' onChange={onChange} name='LastName' value={data.LastName} ></input>
            </div>
            </div>
            <div class="col-md-6 mb-4">
            <div data-mdb-input-init class="form-outline">                 
                <label></label>
                <input type="Text" class="form-control inputblur" placeholder='CompanyName' onChange={onChange} name='CompanyName' value={data.CompanyName}></input>
            </div>
            </div>
            <div class="col-md-6 mb-4">
            <div data-mdb-input-init class="form-outline">                 
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}></label>
                <input type="email" class="form-control inputblur" placeholder='EmailAddress' onChange={onChange} name='Email' value={data.Email} ></input>
            </div>
            </div>
            <div class="col-md-6 mb-4">
            <div data-mdb-input-init class="form-outline">                
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}></label>
                <input type="PhoneNumber" class="form-control inputblur" placeholder='PhoneNumber' onChange={onChange} name='PhoneNumber' value={data.PhoneNumber}></input>
            </div> 
            </div>
            <div class="col-md-6 mb-4">
            <div data-mdb-input-init class="form-outline"> 
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}></label>
                <input type="Password" class="form-control inputblur" placeholder='Password' onChange={onChange} name='Password' value={data.Password}></input>
            </div>
            </div>
           
            <div className="row mb-3 col-12">
              <div className="row mb-3 col-12">
                <button type='submit' className='btn-client'>Register</button>
              </div>
              <p style={{ textAlign: 'center',color:'white' }}>Already have an account?</p>
              <Link to="/loginuser" style={{ textAlign: 'center' }}>Login</Link>
            </div> 
</div>
        </form> 
        </div>          
        </div>
          </div>
        </div>
          </div>
      </section>
      </div><br></br><br></br><br></br>
    
    </div>
  )
}

export default Clientreg