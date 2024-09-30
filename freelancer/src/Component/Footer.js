import React from 'react'
import blue from "../Image/blue-connect.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
  {/* <footer class="pt-5 pb-3" className='foot'>
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
    */}
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h3>Freelancer</h3>
                <ul>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Contests</a></li>
                    <li><a href="#">Freelancer</a></li>
                    <li><a href="#">Enterprise</a></li>
                    <li><a href="#">Membership</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>About us</h3>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">How it Works</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Sitemap</a></li>

                </ul>
            </div>
            <div class="footer-section">
                <h3>Partners</h3>
                <ul>
                    <li><a href="#">Escrow.com
                    </a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">Loadshift</a></li>
                    <li><a href="#">Warrior Forum</a></li>
                </ul>
            </div>
           
                <div class="social-icons">

                    <Link to=""><FaFacebook style={{marginRight:'10px',color:'white',height:'25px',width:'30px'}}/>Facebook</Link> 
                    <Link to="#"><FaTwitter style={{marginRight:'10px',color:'white',height:'25px',width:'30px'}}/>Twitter</Link>
                    <Link to="#"><FaInstagramSquare style={{marginRight:'10px',color:'white',height:'25px',width:'30px'}}/>Twitter</Link>
                </div>
            </div>
    </footer>
    </div>
  )
}

export default Footer