import React from 'react'
import "../Component/Login.css"

import logo from "../Image/gro-icons_connect.png"
import Footer from './Footer'

function Login() {
  return (
   
    <div>
      <div class="bg-image" >
        <div class="container py-5 h-100" >

          <div class="row-1col-2">
            <p style={{fontSize:'60px'}}>Connect</p>
            <img src={logo} className='logo'></img>

          </div>
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-whith text-black" className='margin'>
                <div class="card-body p-5 text-center">
                  <div class="mb-1">
                  </div>
                  <div class="mb-md-5 mt-md-4 pb-5">
                    
                    <div class="row-5col-1">
                      <p style={{ fontWeight: 'bold', fontSize: '30px', color: '#1A728E' }}>Sign Up</p>
                      <div className="col">
                        <div>
                          <div style={{ width: '80px', marginLeft: '55px', color: '#1A728E' }}>UserName </div>
                          <input type='text' placeholder='user Name' style={{ width: '300px', height: '40px', borderRadius: '8px', borderColor: '#1A728E' }}></input> </div><br></br>
                        <div>
                          <div style={{ width: '80px', marginLeft: '40px', color: '#1A728E' }}>Email </div>
                          <input type='text' placeholder='email' style={{ width: '300px', height: '40px', borderRadius: '8px', borderColor: '#1A728E' }}></input> </div><br></br>


                        <a href='' className='reset' >Reset Password</a>
                        <a href=''>Sign Up</a><br></br><br></br>
                        <button type="button" className="btn-login">Login</button>
                      </div>


                    </div>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
     <Footer/>
     </div>
    </div>

  )
}

export default Login