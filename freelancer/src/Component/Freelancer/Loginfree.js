import React,{useState} from 'react'
import "../../Component/Login.css"
import logo from "../../Image/gro-icons_connect.png"
import Footer from '../Footer'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Loginfree() {
  const navigate=useNavigate()
  const [data, setdata] = useState({ Email: '',Password: ''})
  const Loginfreelancer = (a) => {
    console.log(a)
    setdata({ ...data, [a.target.name]: a.target.value })
  }
 
  const freelogin = (event) => {
    event.preventDefault()
    axios.post('http://localhost:4000/login',data)
    .then((result)=>{
		if(result.data.status==200){
      localStorage.setItem("freelancer",JSON.stringify(result.data.freelancer))

      alert("Login Sucessfully")
      navigate('/fhome')

		}
		 else if(result.data.status==500){
			alert("Password Error")
      
		}
		else if(result.data.status==400){
			alert("User Not Found")
		}
    })
    .catch((error)=>{
      console.log(error)
    })
    console.log("save")
  }
  console.log(data)
  return (
    <div>
         <div className='workkimg'>
     <div class="position-absolute top-0 start-50 translate-middle-x" style={{color:'white',fontSize:'40px'}}>connect
     <img src={logo}/>
     </div><br></br>

     <section class="vh-100 gradient-custom">
       <div class="container py-5 h-100">
       <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-white text-black" >
           <div class="card-body p-5 text-center ">
            <div class="mb-md-5 mt-md-4 pb-5">
            <form onSubmit={freelogin}>
              <h1 style={{color:'#033949',fontSize:'30px'}}>Freelancer Login</h1><br></br><br></br>
          
              <div class="row mb-3 col-12">
                <label ></label>
                <input type="Email" placeholder='Enter your email'class="form-control"onChange={Loginfreelancer} name='Email' value={data.Email}/>
            </div><br></br>
            <div class="row mb-3 col-12">
                <label></label>
                <input type="Password" placeholder='Password'class="form-control" onChange={Loginfreelancer} name='Password' value={data.Password}/>
            </div><br></br>
            <div class="row mb-3 col-12">
                <button type='submit'className='btn-free'style={{backgroundColor:'#033949',border:'none'}}>Login</button>
            </div>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-6'>
                    <Link to="/">Reset Password</Link> 
                    </div>
                    <div className='col-6'>
                    <Link to="/freereg">Sign Up</Link> 

                    </div>
                    </div>
                  </div> 
                  <div>
                  </div>
               </form>
               </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </section>
      </div>
      <div>
     <Footer/>
     </div>
    </div>
  )
}

export default Loginfree