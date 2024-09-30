import React from 'react'

function Header() {
  return (
    <div>
<ul class="nav justify-content-center navbar nav-list">      
        <a className='nav-link' href="#">Home</a>
        <a  className='nav-link'href="/Home">About</a>
        <a className='nav-link'href="/footer">Contact</a>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Login
          </a>
          <ul class="dropdown-menu" style={{backgroundColor:'#1A728E'}}>
            <li><a class="dropdown-item" href="./Loginuser">User</a></li>
            <li><a class="dropdown-item" href="./Loginfree">Freelancer</a></li>
          </ul>
        </li>
    </ul>
    </div>
  )
}

export default Header