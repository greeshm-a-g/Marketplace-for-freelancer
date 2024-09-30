import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle.min.js' 
import Login from './Component/Admin/Login';
import{BrowserRouter,Routes,Route}from"react-router-dom"
import Home from './Component/Home';
import Signup from './Component/Signup';
import About from './Component/About';
import Resetpwd from './Component/Resetpwd';
import Clientreg from './Component/User/Clientreg';
import Adminsidedashbord from './Component/Admin/Adminsidedashbord';
import Adminboard from './Component/Admin/Adminboard';
import Connectadmindashboard from './Component/Admin/Connectadmindashboard';
import Freereg from './Component/Freelancer/Freereg';
import Adminviewfreelancer from './Component/Admin/Adminviewfreelancer';
import Loginfree from './Component/Freelancer/Loginfree';
import Loginuser from './Component/User/Loginuser';
import Adminviewclient from './Component/Admin/Adminviewclient';
import HomeLast from './Component/HomeLast';
import HomeFirst from './Component/HomeFirst';
import Aviewaccept from './Component/Admin/Aviewaccept';
import Clienthome from './Component/User/Clienthome';
import Addrequest from './Component/User/Addrequest';
import Freelancerprofile from './Component/Freelancer/Freelancerprofile';
import Myrequest from './Component/User/Myrequest';
import Fhome from './Component/Freelancer/Fhome';
import Viewrequest from './Component/Freelancer/Viewrequest';
import Payment from './Component/User/Payment';
// import Cviewaccept from './Component/User/Cviewaccept';
import Viewfreelancer from './Component/Freelancer/Viewfreelancer';
import Footer from './Component/Footer';
import Updatefreeprofile from './Component/Freelancer/Updatefreeprofile';
import Cnavbar from './Component/User/Cnavbar';
import Updateclient from './Component/User/Updateclient';
import UserProfile from './Component/User/Userprofile';
import Viewfreelancermsg from './Component/User/Viewfreelancermsg';
import Acceptedwork from './Component/Freelancer/Acceptedwork';
import Fnavbar from './Component/Freelancer/Fnavbar';
import Cviewfreelancer from './Component/User/Cviewfreelancer';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        {/* Admin */}
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Reset' element={<Resetpwd/>}/>
      <Route path='/Adminside'element={<Adminsidedashbord/>}/>
      <Route path='/Adminboard'element={<Adminboard/>}/>
      <Route path='/connect'element={<Connectadmindashboard/>}/>
      <Route path='/Adminviewfree'element={<Adminviewfreelancer/>}/>
      <Route path='/Aviewclient'element={<Adminviewclient/>}/>
      <Route path='/last'element={<HomeLast/>}/>
      <Route path='/'element={<HomeFirst/>}/>
      <Route path='/aviewaccept'element={<Aviewaccept/>}/>
      <Route path='/footer'element={<Footer/>}/>

      {/* Freelancer */}
      <Route path='/freereg'element={<Freereg/>}/>
      <Route path='/Loginfree'element={<Loginfree/>}/>
      <Route path='/freelancerprofile' element={<Freelancerprofile/>}/>
      <Route path='/fhome'element={<Fhome/>}/>
      <Route path='/viewrequest'element={<Viewrequest/>}/>
      <Route path='/Viewfreelancer'element={<Viewfreelancer/>}/>
      <Route path='/Updatefreeprofile'element={<Updatefreeprofile/>}/>
      <Route path='/Acceptedwork'element={<Acceptedwork/>}/>
      <Route path='/Fnavbar'element={<Fnavbar/>}/>

      {/* Client */}
      <Route path='/clientreg'element={<Clientreg/>}/>
      <Route path='/Loginuser'element={<Loginuser/>}/>
      <Route path='/Chome'element={<Clienthome/>}/>
      <Route path='/Addrequest'element={<Addrequest/>}/>
      <Route path='/myrequest'element={<Myrequest/>}/>
      <Route path='/payment'element={<Payment/>}/>
      {/* <Route path='/cviewaccept'element={<Cviewaccept/>}/> */}
      <Route path='/UserProfile'element={<UserProfile/>}/>
      <Route path='/Cnavbar'element={<Cnavbar/>}/>
      <Route path='/Updateclient'element={<Updateclient/>}/>
      <Route path='/Viewfreelancermsg'element={<Viewfreelancermsg/>}/>
      <Route path='/Cviewfreelancer'element={<Cviewfreelancer/>}/>


</Routes> 
      
    </div>
    </BrowserRouter>
  );
}

export default App;
