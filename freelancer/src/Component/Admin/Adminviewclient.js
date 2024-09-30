import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Adminsidedashbord from './Adminsidedashbord';

function Adminviewclient() {
  const [view, setview] = useState([]);
  const getAlluserReqs = () => {
    axios.get('http://localhost:4000/viewallclient')
      .then((result) => {
        console.log(result);
        setview(result.data.data);  
        console.log(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAlluserReqs();
  }, []);

  const approveclient = (id) => {
    axios.post(`http://localhost:4000/approveclient/${id}`)
      .then((res) => {
        console.log(res)
        if (res.data.status === 200) {
          alert("Approved");
          getAlluserReqs();
        }
        if (res.data.status === 400) {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err)
        alert("Approval Failed");
      });
  };
  const removeclient = (id) => {
    axios.post(`http://localhost:4000/removeclient/${id}`)
      .then((res) => {
        console.log(res)
        if (res.data.status === 200) {
          alert("Delected successfully");
          getAlluserReqs();
        }
        if (res.data.status === 400) {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err)
        alert("Failed to delect");
      });
  };

  return (
    <div>
      <div className='row'>
        <div className='col-3'>
          <Adminsidedashbord />
        </div>
        <div className='col-9'>
          <div className='container usertable'>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">SI NO</th>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">CompanyName</th>
                  <th scope="col">Email</th>
                  {/* <th scope="col">PhoneNumber</th>
                  <th scope="col">Password</th> */}
                  <th scope="col">Option</th>
                </tr>
              </thead>
              <tbody>
                {view.map((client, index) => (
                  <tr key={client._id}>
                    <td>{index + 1}</td>
                    <td>{client.FirstName}</td>
                    <td>{client.LastName}</td> 
                    <td>{client.CompanyName}</td>
                    <td>{client.Email}</td>
                    {/* <td>{client.PhoneNumber}</td> */}
                    {/* <td>{client.Password}</td> */}
                    <td>
                      <button 
                      onClick={() => approveclient(client._id)}className='btn btn-primary Accept'style={{ backgroundColor: 'green', border: 'none', margin: '10px' }}type='button'>Accept
                      </button>
                      <button
                      onClick={()=>removeclient(client._id)}className='btn btn-primary Reject'style={{ backgroundColor: 'red', border: 'none' }}type='button'>Reject
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminviewclient;
