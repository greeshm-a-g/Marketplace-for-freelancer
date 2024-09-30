import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
function Aviewaccept() {
    const [view, setview] = useState([]);

    const getAlluserReqs = () => {
      axios.get('http://localhost:4000/Viewacceptclient')
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
  

  return (
    <div>
        <div>
        <div className='container usertable'>

            <table className="table table-hover ">
              <thead>
                <tr>
                  <th scope="col">SI NO</th>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">CompanyName</th>
                  <th scope="col">Email</th>
                  <th scope="col">PhoneNumber</th>
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
                    <td>{client.PhoneNumber}</td>
                    <td>
                    
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
    
  )
}

export default Aviewaccept