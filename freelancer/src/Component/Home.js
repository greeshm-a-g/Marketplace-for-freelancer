import React from 'react'
import "../Component/Home.css"
import side from "../Image/side_fig.png"
import HomeFirst from './HomeFirst'




function Home() {
  return (
    <div>

      <HomeFirst/>
      <div>
        <p style={{ fontSize: '45.03px', color: '#1A728E', textAlign: 'center', margin: '90px', fontWeight: 'lighter' }}>Lost equipment? Found inspiration?</p>
        <p style={{ fontSize: '29.93px', color: '#1A728E', textAlign: 'center', margin: '90px', fontWeight: 'normal' }}>Join CONNECT, the trusted network for <br></br>freelancing professionals</p>
      </div>
      <button type="con-btn" class="con-btn">Connect Now</button>
      <div class="container py-1 h-100" />
      <div className='banner_3'><br></br>
        <div class="container py-1 h-100" >
          <div className='label'>
            <p style={{ fontSize:'30px', color: '#1A728E', textAlign: 'center', margin:'150px', fontWeight:'lighter'}}>Easily report lost or found items with a user-friendly platform, including photos and detailed descriptions.</p>
            <div class="container py-1 h-100" />
          </div>
          <p style={{ fontSize: '45.03px', color: '#fff', textAlign: 'center', fontWeight: 'lighter' }}>Simplified Reporting</p>
        </div>
      </div>
      <div className='ban2'>
        <div class="container py-1 h-100">
          <div className='laptop' />
          <div class="container py-1 h-100" />
          <p style={{ textAlign: 'center', fontSize: '45.03px', fontFamily: 'Noto Sans', color: 'white' }}>Targeted Search</p>
          <p style={{ wordSpacing: '6px', textAlign: 'center', fontSize: '34.77px', fontWeight: 'lighter', color: 'white' }}>Find what you're looking for quickly with <br></br>advanced filtering and categorization based on <br></br>project types, skills, and locations.</p>
        </div>
      </div>
      <div className='secure'><br></br><br></br><br></br><br></br>
        <div class="container py-1 h-100">
          <p style={{ textAlign: 'center', fontSize: '60px', fontFamily: 'Noto Sans', color: 'white' }}>Secure Communication</p>
          <p style={{ fontWeight: 'lighter', textAlign: 'center', fontSize: '30px', color: 'white' }}>Join CONNECT, the trusted network for <br></br>freelancing professionals</p>
        </div>
      </div>
      <div>
        {/* <div className='side' />
       </div>
     <div>
       <p style={{ textAlign: 'center', fontSize: '45.03px', color: '#1A728E', marginRight: '600px', marginTop: '80px' }}>Community-Driven</p>
       <p style={{ marginTop: '30px', textAlign: 'center', fontSize: '29.09px', color: '#1A728E', marginRight: '600px' }}>Join CONNECT, the trusted<br></br> network for freelancing <br></br>professionals</p>
       <button type="button" className="btn-grow">GROW</button> */}
        <div class="card mb-1" >
          <div class="row g-0" >
            <div class="col-md-4">
              <img src={side} class="img-fluid" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: '45.03px', color: '#1A728E', textAlign: 'center' }}>Community-Driven</h5>
                <p class="card-text" style={{ fontSize: '29.09px', color: '#1A728E', textAlign: 'center' }}>Join CONNECT, the trusted network for freelancing professionals</p>
                <button type="button" className="btn-grow">GROW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='banner3'>
        <div class="container py-5 h-100" />
        <button type="button" className="network">GROW</button> 
      </div> */}
      <div>
        <p style={{ fontSize: '45.03px', color: '#1A728E', textAlign: 'center', marginTop: '100px' }}>Testimonials</p>
        <p style={{ fontSize: '31px', color: 'black', textAlign: 'center', marginTop: '90px', fontWeight: 'lighter' }}>Connect restored my faith in the freelance community. My Code went missing after a shoot, and within days, a fellow Coder  messaged me through the platform to return it! Amazing!</p>
      
      </div>
    </div >

  )
}

export default Home