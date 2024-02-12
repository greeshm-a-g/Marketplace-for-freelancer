import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle.min.js' 
import Login from './Component/Login';
import{BrowserRouter,Routes,Route}from"react-router-dom"
import Home from './Component/Home';
import Footer from './Component/Footer';

import HomeFirst from './Component/HomeFirst';

function App() {
  return (
    <BrowserRouter>
    <div>
       <Routes>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/home' element={<Home/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/HomeFirst' element={<HomeFirst/>}/>
      </Routes> 
       {/* <Login/> */}
      {/* <Home/>  */}
    </div>
    </BrowserRouter>
  );
}

export default App;
