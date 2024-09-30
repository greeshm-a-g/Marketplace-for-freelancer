import Footer  from '../Footer'
import HomeLast from '../HomeLast'
import Home from '../Home'
import Iconwhite from '../Iconwhite'
import logo from "../../Image/gro-icons_connect.png"

function Fhome() {

  return (
    <div>  <div className='workkimg'>
    <div className='top'>
      <ul class="nav justify-content-center  nav-list "> 
       <a style={{Color:'#033949'}}href="#" className='nav-link'>Home</a>
       <a href="/Viewfreelancer" className='nav-link'>Freelancer</a>
       <a href="/viewrequest" className='nav-link'>View Request </a>
       <a href="/Acceptedwork" className='nav-link'> My Work </a>
       <a href="/freelancerprofile" className='nav-link'>profile</a>
       <a href="/loginfree" className='nav-link'>Logout</a>

      </ul>
     
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
    <Footer/></div> 
    
  )
}

export default Fhome