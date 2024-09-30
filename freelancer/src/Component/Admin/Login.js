import React, { useState } from 'react'
import "../../Component/Login.css"
import logo from "../../Image/gro-icons_connect.png"
import Footer from '../Footer'
import{useNavigate}from 'react-router-dom'
function Login() {
  const[logi,setlogi]=useState({UserName:'',Password:''})
  const pagefn=(sub)=>{
      console.log(sub)
      // console.log(com)
      setlogi({...logi,[sub.target.name]:sub.target.value})
  }
  const  navigate=useNavigate();
  const onSubmit = (note)=>{
   note.preventDefault()
  
  
      if(logi.UserName==="Admin"&& logi.Password==="123"){
        alert("Login successfull");
        navigate('/connect')

      }
      else
      {
         if(logi.UserName!=="Admin"){
        alert("UserName not found")
      }
       if(logi.Password!=="123"){
        alert("Password is not found")
      }
    }
  };
      

  

  return (
   
    <div>
      <div className='bg-image'>
     <div class="position-absolute top-0 start-50 translate-middle-x" style={{color:'white',fontSize:'40px'}}>connect
     <img src={logo}/>
     </div><br></br>
     <section class="vh-100 gradient-custom">
       <div class="container py-5 h-100">
       <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-white text-black" >
           <div class="card-body p-5 text-center">
            <div class="mb-md-5 mt-md-4 pb-5">
            <form onSubmit={onSubmit}>
              <h1 style={{color:'#1A728E',fontSize:'30px'}}>Admin Login</h1><br></br><br></br>
            <div class="row mb-3 col-12">
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}>UserName</label>
                <input type="text" placeholder='name'class="form-control" onChange={pagefn} name='UserName' value={logi.name}/>
            </div>
              <div class="row mb-3 col-12">
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}>Password</label>
                <input type="Password" placeholder='password'class="form-control"onChange={pagefn} name='Password'value={logi.Password}/>
            </div>
            <div class="row mb-3 col-12">
                <button type='submit'className='btn-signup'style={{backgroundColor:'#1A728E',border:'none'}}>Login</button>
            </div>
            {/* <div className='col-12'>
                <div className='row'>
                    <div className='col-6'>
                    <a href="">Reset Password</a>
                    </div>
                    <div className='col-6'>
                    <a href="">Sign Up</a>
                    </div>
                    </div>
                  </div> */}
                  <div>
                  </div>
               </form>
               </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </section>
      </div>
      <div>
     <Footer/>
     </div>
    </div>

  )
}

export default Login