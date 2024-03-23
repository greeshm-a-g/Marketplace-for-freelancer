import React, { useState } from 'react'
import "../Component/Signup.css"
import logo from "../Image/gro-icons_connect.png"
import Footer from './Footer'
import axios from 'axios'
function Clientreg() {
    const[com,setcom]=useState({UserName:'',Email:'',DOB:'',About:''})
    const page=(main)=>{
        console.log(main)
        // console.log(com)
        setcom({...com,[main.target.name]:main.target.value})
    }
    console.log(com)
    const signfn=(x)=>{
        x.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',com)
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
            <form onSubmit={signfn}>
            <h1 style={{color:'#1A728E',fontSize:'30px'}}>Sign Up</h1><br></br><br></br>
            <div class="row mb-3 col-12">
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}>UserName</label>
                <input type="text" class="form-control" placeholder='UserName' onChange={page} name='UserName' value={com.Name} ></input>
            </div>
            <div class="row mb-3 col-12">
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}>Email</label>
                <input type="email" class="form-control" placeholder='Email' onChange={page} name='Email' value={com.Email} ></input>
            </div>
            <div class="row mb-3 col-12">
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}>DOB</label>
                <input type="date" class="form-control" placeholder='Date of birth' onChange={page} name='DOB' value={com.DOB}></input>
            </div>
            <div class="row mb-3 col-12">
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}>About</label>
                <input type="text" class="form-control" placeholder='About' onChange={page}name='About' value={com.About}></input>
            </div>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-6'>
                    <a href="">Already have an account , Login</a><br></br><br></br>
                    <div class="row mb-3 col-12">
                <button className='btn-signup'style={{backgroundColor:'#1A728E',border:'none'}}>Reset</button>
            </div>       
            </div>
                    
                </div>
                </div><br></br>
           </form> 
        </div>
        </div>
          </div>
        </div>
          </div>
      </div>
      </section>
      </div><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer/>
    
    </div>
  )
}

export default Clientreg