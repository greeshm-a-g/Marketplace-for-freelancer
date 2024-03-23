import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle.min.js' 
import Login from './Component/Login';
import{BrowserRouter,Routes,Route}from"react-router-dom"
import Home from './Component/Home';
import Footer from './Component/Footer';
import HomeFirst from './Component/HomeFirst';
import HomeLast from './Component/HomeLast';
import Signup from './Component/Signup';
import Iconwhite from './Component/Iconwhite';
import Table from './Component/Table';
import Header from './Component/Header';
import About from './Component/About';
import Resetpwd from './Component/Resetpwd';
import Freereg from './Component/Freereg';
import Clientreg from './Component/Clientreg';
import Consulreg from './Component/Consulreg';

function App() {
  return (
    <BrowserRouter>
    <div>
       <Routes>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/home' element={<Home/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/HomeFirst' element={<HomeFirst/>}/>
      <Route path='/HomeLast' element={<HomeLast/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Iconwhite' element={<Iconwhite/>}/>
      <Route path='/Table' element={<Table/>}/>
      <Route path='/Header' element={<Header/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Reset' element={<Resetpwd/>}/>
      <Route path='/freereg'element={<Freereg/>}/>
      <Route path='/clientreg'element={<Clientreg/>}/>
      <Route path='/consulreg'element={<Consulreg/>}/>
      </Routes> 
      
    </div>
    </BrowserRouter>
  );
}

export default App;
