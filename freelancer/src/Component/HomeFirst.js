import React from 'react'
import logo from "../Image/gro-icons_connect.png"
import Iconwhite from './Iconwhite'
import Header from './Header'
import Home from './Home'
import HomeLast from './HomeLast'
import Footer from './Footer'


function HomeFirst() {
  
  return (
    <div>
     <div className='img'>
          <div className='top'>
          <Header/>

          <div class="row-1col-2" className='connect'>
            <br></br>
            <p style={{fontSize:'50px'}}>Connect</p>
            <img src={logo} className='logo'></img>
            </div>
            </div>
        
          <p style={{ fontSize: '7vmin', fontFamily:'Georgia',color: 'white', textAlign:'center', marginTop: '50px' }}>Pleasure in the job puts perfection in the work</p>
          <p style={{ fontSize: '5vmin', color: '#56D6FF', textAlign: 'center' }}>A Lost & Found for Your Freelance<br></br>Community</p><br></br>
          <Iconwhite/>
      </div> 
      <Home/>
      <HomeLast/>
      <Footer/>
    </div>
  )
}

export default HomeFirst