import React from 'react'
// import Footer from './Footer'
import logo from "../Image/GettyImages.png"
import Header from './Header'

function About() {
  return (
    <div>
      
        <div style={{backgroundColor:'#1A728E'}}>

<Header/>
</div>
 <section class="hero">
    <div class="hero-content">
  
      <h1>Hi! </h1>
      <p>Freelancer</p>
      <p>Web developer with experience building applications for different clients worldwide. Let’s work together to make your ideas come to life.</p>
    </div>
    <div class="hero-image">
    <img src={logo} ></img>
    </div>
  </section>

  <section class="statistics">
    <div class="stat">
      <h2>10+</h2>
      <p>Years of Experience</p>
    </div>
    <div class="stat">
      <h2>150+</h2>
      <p>Happy Clients</p>
    </div>
    <div class="stat">
      <h2>350+</h2>
      <p>Projects Completed</p>
    </div>
  </section>

  <section class="about">
    <div class="about-image">
      <img src="path/to/about-image.jpg" alt="Piyush Malvi"/>
    </div>
    <div class="about-content">
      <h2>About Me</h2>
      <p>Always Learning</p>
      <p>Passionate about developing applications that bring creativity to life. Experienced in working with top clients around the world.</p>
    </div>
  </section>
  <section class="companies">
    <h2>Clients</h2>
    <div class="company-logos">
      <img src="path/to/netflix-logo.png" alt="Netflix"/>
      <img src="path/to/tata-logo.png" alt="Tata"/>
      <img src="path/to/google-logo.png" alt="Google"/>
      <img src="path/to/microsoft-logo.png" alt="Microsoft"/>
    </div>
  </section>
     
    </div>
  )
}

export default About