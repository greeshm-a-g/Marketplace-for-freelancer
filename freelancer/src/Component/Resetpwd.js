import React from 'react'

import logo from "../Image/gro-icons_connect.png"
import Footer from './Footer'
function Resetpwd() {
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
            <h1 style={{color:'#1A728E',fontSize:'30px'}}>Reset Password</h1><br></br><br></br>
            <div class="row mb-3 col-12">
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}>Password</label>
                <input type="text" class="form-control"/>
            </div>
            <div class="row mb-3 col-12">
                <label style={{color:'#1A728E',fontSize:'20px',textAlign:'left'}}>New Password</label>
                <input type="password" class="form-control"/>
            </div>
            <div class="row mb-3 col-12">
                <button className='btn btn-primary 'style={{backgroundColor:'#1A728E',border:'none'}}>Reset</button>
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
        </div>
        </div>
          </div>
        </div>
          </div>
      </div>
      </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Resetpwd