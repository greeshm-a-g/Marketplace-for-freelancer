import React from 'react'
import logo from "../Image/gro-icons_connect.png"
function HomeFirst() {
  return (
    <div>
     <div className='img'>
        <div class="container py-1 h-100" >
          <div className='top'>
          <div class="row-1col-2">
            <p style={{fontSize:'60px'}}>Connect</p>
            <img src={logo} className='logo'></img>
            </div>
            <div className="line" style={{ textAlign: 'center', paddingLeft: '30px' }}>
              <a href="" style={{ paddingRight: '20px', color: 'white', fontSize: '25px' }}>Home</a>
              <a href="" style={{ paddingRight: '20px', color: 'white', fontSize: '25px' }}>About</a>
              <a href="" style={{ paddingRight: '20px', color: 'white', fontSize: '25px' }}>Login</a>
            </div>
          </div>
          
          
          <p style={{ fontSize: '60.05px', color: 'white', textAlign: 'center', marginTop: '200px' }}>Connect,Collaborate, and Reunite</p>
          <p style={{ fontSize: '32.7px', color: '#56D6FF', textAlign: 'center' }}>A Lost & Found for Your Freelance<br></br>Community</p>
        </div>
        <div class="row-1col-2">
            <p style={{fontSize:'60px'}}>Connect</p>
            <img src={logo} className='logo'></img>
            </div> 
      </div>
    </div>
  )
}

export default HomeFirst