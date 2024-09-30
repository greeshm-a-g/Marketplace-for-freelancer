import React from 'react'
import "../Component/Home.css"
import side from "../Image/image copy.png"
import laptop from "../Image/laptop.png"
import icon from"../Image/gro-icons_connect.png"
import con from"../Image/icon_connect.png"
import Footer from './Footer'


function Home() {
  return (
    <div>
        <p style={{ fontSize: '45.03px', color: '#1A728E', textAlign: 'center', margin: '90px', fontWeight: 'lighter' }}>Lost equipment? Found inspiration?</p>
        <p style={{ fontSize: '29.93px', color: '#1A728E', textAlign: 'center', margin: '90px', fontWeight: 'normal' }}>Join CONNECT, the trusted network for <br></br>freelancing professionals</p>
      
      <div class="row-1col-2" className='connect'>
      <button type="button" class="btn btn-primary btn-grow">CONNECT NOW<img src={icon}/></button>

      </div>
      <div className='banner_3'><br></br>
          <div className='label'>
          <p style={{ fontSize:'4vmin', color: '#1A728E', textAlign:'center', fontWeight:'lighter'}}>Easily report lost or found items with a user-friendly<br></br> platform, including photos and detailed descriptions.</p>
          </div> 
          <p style={{ fontSize:'25px', color: 'white', textAlign: 'center', fontWeight: 'bold',marginTop:'-25px' }}>Simplified Reporting</p>  
           </div>
          
      <div className="ban2" ><br></br>
      <div>
        <div class="row-1col-2" className='connect'>
          <img src={laptop}  />
        </div>
      </div>
           <p style={{ textAlign: 'center', color: 'white',fontSize:'10vmin' }}>Targeted Search</p>
           <p style={{ textAlign: 'center', fontSize: '6vmin', fontWeight: 'lighter', color: 'white' }}>Find what you're looking for quickly with <br></br>advanced filtering and categorization based on <br></br>project types, skills, and locations.</p>
        </div>
      <div className='secure'>
        
          <p style={{ textAlign: 'center', fontSize: '50px', fontFamily: 'Noto Sans', color: 'white',padding:'50px' }}>Secure Communication</p>
          <p style={{ fontWeight: 'lighter', textAlign: 'center', fontSize: '30px', color: 'white' }}>Join CONNECT, the trusted network for <br></br>freelancing professionals</p>
       
      </div>
      <div>
       
        <div class="card mb-1" >
          <div class="row g-0" >
            <div class="col-md-4">
              <img src={side} className="img-fluid cup" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body" className='cup'>
                <h5 class="card-title" style={{ fontSize: '45.03px', color: '#1A728E', textAlign: 'center' }}>Community-Driven</h5>
                <p class="card-text" style={{ fontSize: '29.09px', color: '#1A728E', textAlign: 'center' }}>Join CONNECT, the trusted network for freelancing professionals</p>
                <div class="row-1col-2" className='connect'>
                <button type="button" class="btn btn-primary btn-grow">GROW<img src={con}/></button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="congif">
      </div>
      {/* <div className='banner3'>
     
          <p style={{color:'white',textAlign:'center',fontSize:'4vmin',backgroundColor:'rgba(5, 205, 231, 1)',marginLeft:'200px',marginRight:'200px'}}>Connect to Network </p>
      
      </div>  */}
    </div >

  )
}

export default Home