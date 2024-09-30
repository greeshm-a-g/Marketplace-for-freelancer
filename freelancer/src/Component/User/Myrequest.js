// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import Cnavbar from './Cnavbar';
// function Myrequest() {
//     const [myrequest, setmyrequest] = useState([]);  
//     const clientId = JSON.parse(localStorage.getItem('client'));

//     const getAlluserReqs = (id) => {
//       axios.get(`http://localhost:4000/myrequest/${clientId.clientId}`)
//         .then((result) => {
//           console.log(result);
//           setmyrequest(result.data.data);  
//           console.log(result.data.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };
  
//     useEffect(() => {
//       getAlluserReqs();
//     }, []);
//   return (
//     <div>
// <Cnavbar/>
//   <div className='container usertable'>
//   <table className="table table-hover">
//     <thead>
//       <tr>
//         <th scope="col">Category</th>
//         <th scope="col">Title</th>
//         <th scope="col">Description</th>
//         <th scope="col">Deadline</th>
//         <th scope="col">Budget</th>
//         <th scope="col">Contactinformation</th>
        
//       </tr>
//     </thead>
//     <tbody>
//       {myrequest.map((request) => (
//         <tr key={request._id}>
//           <td>{request.Category}</td>
//           <td>{request.Title}</td>
//           <td>{request.Description}</td>
//           <td>{request.Deadline}</td>
//           <td>{request.Budget}</td>
//           <td>{request.Contactinformation}</td>
          
        
//         </tr>
//       ))}
//     </tbody>
//   </table>

               
//             </div>
//         </div>
//   )
// }

// export default Myrequest