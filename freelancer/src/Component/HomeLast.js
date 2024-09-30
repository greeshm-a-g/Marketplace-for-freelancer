import React from 'react'
import bea from "../Image/Beauty.png"
function HomeLast() {
  return (
    <div>
      <div>
        <p style={{ fontSize: '45.03px', color: '#1A728E', textAlign: 'center', marginTop: '10px' }}>Testimonials</p>
        <p style={{ fontSize: '31px', color: 'black', textAlign: 'center', marginTop: '30px', fontWeight: 'lighter' }}>"Connect restored my faith in the freelance community. My Code went missing after a shoot, and within days, a fellow Coder  messaged me through the platform to return it! Amazing!"</p><br></br>
        <div>
        <div class="row-1col-2" className='connect'>
          <img src={bea}  />
        </div>
      </div>
      </div>
      <p style={{textAlign:'center',fontSize:'31px'}}>Amazing Coder</p>
    </div>
  )
}

export default HomeLast