import React from 'react'
import blue from "../Image/blue-connect.png"
function Footer() {
  return (
    <div>
  <footer class="pt-5 pb-3" className='foot'>
      <div class="container" >
          <div class="row  justify-content-center text-center  align-items-center ">

              <div class="col-12 col-md-12 col-xxl-6 px-0 ">
                  
                  <nav class="nav nav-footer justify-content-center">
                  <div class="row-1col-2" className='fotconnect'>
                  <p style={{fontSize:'50px',color:'#1A728E'}}>Connect <img src={blue}></img></p>
            </div>
                  <a class="nav-link" href="#">Home</a>
                     
                      <a class="nav-link" href="#">About</a>
                     
                      <a class="nav-link" href="#">Login </a>
                      
                      <a class="nav-link" href="#">Blog</a>
                      
                      <a class="nav-link" href="#">Success Stories</a>
                      <a class="nav-link" href="#">FAQs</a>
                      
                  </nav>
              </div>
          </div>
          <hr class="mt-6 mb-3"/>
         
      </div>
      </footer>
                                            
    </div>
  )
}

export default Footer