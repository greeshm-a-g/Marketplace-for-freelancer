import React from 'react'
import Header from './Header'
import Iconwhite from './Iconwhite'
function Table() {
    return (
        <div>
            <div className='tableimg'>
                <Iconwhite />
                <Header /> 
            </div>
            <div className='row-2'>
                <p style={{ marginTop: '100px', fontSize: '45.03px', color: '#1A728E', textAlign:'center'}}>Table</p>
                <p style={{ fontSize: '25px', color: '#1A728E',textAlign:'center'}}>This is a sample table</p>
            </div>

            <table class="table table-bordered samtable">
                <thead>
                    <tr>
                        <th scope="col">SI</th>
                        <th scope="col">Item</th>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">About</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Name</td>
                        <td>Cat 1</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><a href="" style={{ color: 'blue' }}>Edit</a>
                        </td>

                    </tr>
                </tbody>
            </table>
            <div className='row-1'>
                <p style={{ marginTop: '100px', fontSize: '45.03px', color:'#1A728E',textAlign:'center'}}>Table Display Update</p>
            </div>
          
                    <div class="dropdown cat">
                        <div style={{ width: '80px',color: '#1A728E' }}>Category</div>

                        <button class="btn btn-secondary dropdown-toggle drop" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '300px', height: '69.63px',color: '#929292', backgroundColor: 'white', borderWidth: '2px' }}>
                            Category
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark drop">
                            <li><a class="dropdown-item active" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div><br></br>
                    <div className='col-md-12'>
                    <label>Item</label>
                    <input className='form-control'></input>
                  </div>
                  <div className='col-md-12'>
                    <label>Name</label>
                    <input className='form-control'></input>
                  </div>
                  <button className='btn btn-primary 'style={{backgroundColor:'#1A728E',border:'none'}}>Submit</button>

                


            



        </div>
    )
}

export default Table