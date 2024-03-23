import React from 'react'
import logo from "../Image/gro-icons_connect.png"
import Iconwhite from './Iconwhite'


function HomeFirst() {
  
  return (
    <div>
     <div className='img'>
        
          <div className='top'>
          <div class="row-1col-2" className='connect'>
            
            <p style={{fontSize:'50px',}}>Connect</p>
            <img src={logo} className='logo'></img>
            </div>
            
            <div className="line" style={{ textAlign: 'center', paddingLeft: '30px' }}>
              <a href="" style={{ paddingRight: '20px', color: 'white', fontSize: '25px'}}>Home</a>
              <a href="" style={{ paddingRight: '20px', color: 'white', fontSize: '25px' }}>About</a>
              <a href="" style={{ paddingRight: '20px', color: 'white', fontSize: '25px' }}>Login</a>
            </div>
         
          </div>
          <p style={{ fontSize: '8vmin', color: 'white', textAlign: 'center', marginTop: '50px' }}>Connect,Collaborate, and Reunite</p>
          <p style={{ fontSize: '5vmin', color: '#56D6FF', textAlign: 'center' }}>A Lost & Found for Your Freelance<br></br>Community</p><br></br>
          <Iconwhite/>
        
      
             
      </div> 
      
    </div>
  )
}

export default HomeFirst