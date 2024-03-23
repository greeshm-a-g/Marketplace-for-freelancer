import React, { useState } from 'react'
import "../Component/Login.css"

import logo from "../Image/gro-icons_connect.png"
import Footer from './Footer'
import axios from 'axios'

function Login() {
  const[logi,setlogi]=useState({UserName:'',Email:''})
  const pagefn=(sub)=>{
      console.log(sub)
      // console.log(com)
      setlogi({...logi,[sub.target.name]:sub.target.value})
  }
  console.log(logi)
  const note=(book)=>{
      book.preventDefault()
      axios.post('https://jsonplaceholder.typicode.com/posts',logi)
      .then(result=>{
          console.log(result)
      })
     .catch(error=>{
      console.log(error)
     }) 
  }
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
            <form onSubmit={note}>
              <h1 style={{color:'#1A728E',fontSize:'30px'}}>Sign In</h1><br></br><br></br>
            <div class="row mb-3 col-12">
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}>UserName</label>
                <input type="text" placeholder='name'class="form-control" onChange={pagefn} name='UserName' value={logi.name}/>
            </div>
              <div class="row mb-3 col-12">
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}>Email</label>
                <input type="email" placeholder='email'class="form-control"onChange={pagefn} name='Email'value={logi.Email}/>
            </div>
            <div class="row mb-3 col-12">
                <button type='submit'className='btn-signup'style={{backgroundColor:'#1A728E',border:'none'}}>Sign In</button>
            </div>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-6'>
                    <a href="">Reset Password</a>
                    </div>
                    <div className='col-6'>
                    <a href="">Sign Up</a>
                    </div>
                    </div>
                  </div>
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