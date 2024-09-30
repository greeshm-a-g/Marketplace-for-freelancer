import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import HomeLast from '../HomeLast';
import Home from '../Home';

function Clienthome() {

  return (
    <div>
      <div className='img'>
        <div className='top'>
        <ul class="nav justify-content-center  nav-list">
            <a href="#" className='nav-link'>Home</a>
            <a href="/Cviewfreelancer" className='nav-link'>Freelancer</a>
            <a href="/addrequest" className='nav-link'>Request Work</a>
            <a href="/Viewfreelancermsg" className='nav-link'> Accepted Work </a>
            <a href="/UserProfile" className='nav-link'>Profile</a>
            <a href="/Loginuser" className='nav-link'>Logout</a>
          
          </ul>
          <div class="row-1col-2" className='connect'>
          <br></br>
          <p style={{fontSize:'50px'}}>Connect</p>
          </div>
          </div>
       
        <p style={{ fontSize: '7vmin', fontFamily:'Georgia',color: 'white', textAlign:'center', marginTop: '50px' }}>Pleasure in the job puts perfection in the work</p>
        <p style={{ fontSize: '5vmin', color: '#56D6FF', textAlign: 'center' }}>A Lost & Found for Your Freelance<br></br>Community</p><br></br>

      </div>
    
      <Home/>
    <HomeLast/>
    <Footer/>
    </div>
  )
}

export default Clienthome



