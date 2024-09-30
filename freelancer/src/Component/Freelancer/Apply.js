// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// function Apply() { const [data, setData] = useState({ Name: '', Email: '', Qualification: '', Skills: '' });

// const onChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
// };

// useEffect(() => {
//     console.log(data);
// }, [data]);

// const signfn = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:4000/Apply', data)
//         .then((result) => {
//             console.log('Response:', result);
//             alert('Successful');
//         })
//         .catch((err) => {
//             console.error('Error:', err);
//             alert('Failed');
//         });
// };
//   return (
//     <div>  <section className="vh-100 gradient-custom">
//     <div className="container py-5 h-100">
//      <div className="row justify-content-center align-items-center h-100">
//       <div className="col-12 col-lg-9 col-xl-7">
//        <div className="card shadow-2-strong card-registration ">
//          <div className="card-body p-4 p-md-5">
  
//         <form onSubmit={signfn}>
//             <div className="col-12">
//                 <div className="form-outline">
//                     <label className="form-label ">Name</label>
//                     <input type="text" className="form-control form-control-lg addreqinput" onChange={onChange} name="Name" value={data.Name}></input>
//                 </div>
//             </div>
//                     <br></br>
//             <div className="row">
//                     <div className="col-md-6 mb-4">
//                     <div className="form-outline">
//                         <label className="form-label ">Email</label>
//                         <input type="text" className="form-control form-control-lg addreqinput" onChange={onChange} name="Email" value={data.Email}></input>
//                     </div>
//             </div>
//             <div className="col-md-6 mb-4">
//                 <div className="form-outline">
//                 <label className="form-label ">Qualification</label>
//                 <input type="text" className="form-control form-control-lg addreqinput" onChange={onChange} name="Qualification" value={data.Qualification}></input>
//                 </div>
//             </div>
//             </div>
//             <div className="col-12">
//                 <div className="form-outline">
//                     <label className="form-label ">Skills</label>
//                     <input type="text" className="form-control form-control-lg addreqinput" onChange={onChange} name="Skills" value={data.Skills}></input>
//                 </div>
//            </div>
//                     <div className="connect" style={{ textAlign: 'center', marginTop: '20px' }}>
//                     <button type="submit" style={{ width: '300px', backgroundColor: "darkgreen", border: 'none', height: "40px", fontSize: '20px' }} className="btn btn-primary">Apply</button>
//                 </div>
// </form>
// </div>
//     </div>
// </div>
// </div>
// </div>
// </section></div>
//   )
// }

// export default Apply