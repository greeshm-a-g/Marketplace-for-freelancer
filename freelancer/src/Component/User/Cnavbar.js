import React from 'react'

function Cnavbar() {
  return (
    <div>        
    <div style={{backgroundColor:'#0c637d'}}>
     <ul class="nav justify-content-center  nav-list">
        <a href="chome" className='nav-link'>Home</a>
        <a href="/Cviewfreelancer" className='nav-link'>Freelancer</a>
        <a href="/addrequest" className='nav-link'>Request Work</a>
        <a href="/Viewfreelancermsg" className='nav-link'> Accepted Work </a>
        <a href="/UserProfile" className='nav-link'>Profile</a>
        <a href="/Loginuser" className='nav-link'>Logout</a>
      
      </ul>
</div></div>
  )
}

export default Cnavbar