import React from 'react'
import Adminsidedashbord from './Adminsidedashbord'
import Adminboard from './Adminboard'

function Connectadmindashboard() {
  return (
    <div>
              <div className='row'> 
        <div className='col-2'>
            <Adminsidedashbord/>
        </div>
        <div className='col-10'>
         <Adminboard/>
</div>
</div>
        </div>
  )
}

export default Connectadmindashboard