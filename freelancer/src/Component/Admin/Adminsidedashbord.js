import React from 'react'
import bea from "../../Image/Beauty.png"
import "../../Component/Admin/Admin.css"
import { Link } from 'react-router-dom'
import { FaUsers } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { TbFiles } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
function Adminsidedashbord() {
  return (
    <div>
<div class="sidebar">
<div class="row-1col-2" className='connect'>
          <img src={bea}  />
        </div>
        <h4 class="text-center">Admin</h4>
        <Link to="/connect"><TbSmartHome style={{marginRight:'10px'}}/>Home</Link> 
        <Link to="/Aviewclient">< FaUsers style={{marginRight:'10px'}}/>Users</Link> 
        <Link to="/Adminviewfree"><FaRegUser style={{marginRight:'10px'}}/>Freelancers</Link> 
        <Link to="/aviewaccept"><TbFiles style={{marginRight:'10px'}}/>ViewAcceptedUser</Link> 
        <Link to="/"><RiLogoutBoxLine  style={{marginRight:'10px'}}/>Logout</Link> 

    </div>
    
    </div>
  )
}

export default Adminsidedashbord