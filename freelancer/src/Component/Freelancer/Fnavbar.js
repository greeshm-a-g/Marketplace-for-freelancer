import React, { } from 'react'


function Fnavbar() {

  return (
    <div>  
         
    <div style={{ backgroundColor: '#033949' }}>
      <ul className="nav justify-content-center nav-list">
        <a href="/Fhome" className='nav-link'>Home</a>
        <a href="/Viewfreelancer" className='nav-link'>Freelancer</a>
        <a href="/viewrequest" className='nav-link'>View Request</a>
        <a href="/Acceptedwork" className='nav-link'> My Work </a>
    <a href="/freelancerprofile" className='nav-link'>Profile</a>
        <a href="/loginfree" className='nav-link'>Logout</a>
      </ul>
    </div></div>
    
  )
}

export default Fnavbar