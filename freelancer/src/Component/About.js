import React from 'react'
import Header from './Header'
import Iconwhite from './Iconwhite'
import Footer from './Footer'
import Table from './Table'
function About() {
  return (
    <div>
         <div className='tableimg'>
         <Iconwhite />
         <Header />
        </div>
         <p style={{textAlign:'center',marginTop:'100px'}}>Heading</p>
         <p style={{textAlign:'center',color:'#1A728E'}}>Share tips on preventing loss, navigating return processes, and promoting a collaborative community. Success Stories: Feature heartwarming stories of lost items reunited with their owners through the platform. FAQs: Address common questions and concerns about using the platform. </p>
         <Table/>
     <Footer/>
    </div>
  )
}

export default About