import React , {  useState }from 'react'
import "../../Component/Login.css"
import logo from "../../Image/gro-icons_connect.png"
import Footer from '../Footer'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Loginuser() {
  const [data, setdata] = useState({ Email: '',Password: ''})
  const navigate = useNavigate()
  const onChange = (a) => {
    console.log(a)
    setdata({ ...data, [a.target.name]: a.target.value })
  }
 
  const submitfn = (event) => {
    event.preventDefault();
    axios.post("http://localhost:4000/loginclient", data)
      .then((result) => {
        if (result.data.status === 200) {
          localStorage.setItem("client",JSON.stringify(result.data.client))
console.log("client ",result.data.client);

          alert("Login Successfully");
          navigate('/chome')

        } else if (result.data.status === 403) {
          alert("User not approved");
        } else if (result.data.status === 500) {
          alert("Password Error");
        } else if (result.data.status === 400) {
          alert("User Not Found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data)
  return (
    <div>
       <div className='img'>
     <div class="position-absolute top-0 start-50 translate-middle-x" style={{color:'white',fontSize:'40px'}}>connect
     <img src={logo}/>
     </div><br></br>
     <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card userblur" >
          <div class="row">
            <form onSubmit={submitfn}>
              <h1 style={{color:'white',fontSize:'30px',textAlign:'center'}}>User Login</h1><br></br><br></br>
            <div className="row mb-3 col-12">
                <label style={{color:'white',fontSize:'20px',textAlign:'left'}}>Email</label>
                <input type="Email" placeholder='Email Address'className="form-control inputblur" onChange={onChange} name='Email' value={data.Email}/>
            </div>
              <div className="row mb-3 col-12">
                <label style={{color:'white',fontSize:'20px',textAlign:'left'}}>Password</label>
                <input type="Password" placeholder='password'className="form-control inputblur"onChange={onChange} name='Password' value={data.Password}/>
            </div>
            <div className="row mb-3 col-12">
                <button type='submit'className='btn-signup'style={{backgroundColor:'#1A728E',border:'none'}}>Login</button>
            </div>
            <div className='col-12'>
                <div className='row'>
                    <Link to="/login">Reset Password</Link>
                    <Link style={{textAlign:'right'}}to="/Clientreg">Sign Up</Link> 

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
      </section>
      </div>
      <div>
     <Footer/>
     </div>
    </div>
  )
}

export default Loginuser