import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cnavbar from './Cnavbar';
import { useNavigate, useParams} from 'react-router-dom';
function Addrequest() {
    const [data, setData] = useState({ Category: '', Title: '', Deadline: '', Contactinformation: '', Budget: '', Description: '' });
    const navigate = useNavigate()
    const clientId = JSON.parse(localStorage.getItem('client'));

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        console.log(data);
    }, [data]);
    const signfn = (e) => {
        e.preventDefault();
        const requestData = { ...data, clientId: clientId.clientId };
        axios.post(`http://localhost:4000/addrequest/${clientId.clientId}`, requestData)
            .then((result) => {
                console.log('Response:', result);
                alert('Successful');
                navigate('/Chome');
            })
            .catch((err) => {
                console.error('Error:', err);
                alert('Failed');
            });
    };
    
    

    return (
        <div> 
     
           <Cnavbar/>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                 <div className="row justify-content-center align-items-center h-100">
                  <div className="col-12 col-lg-9 col-xl-7">
                   <div className="card shadow-2-strong card-registration addrequest">
                     <div className="card-body p-4 p-md-5">
                <h3 style={{ color: '#0c637d', textAlign: "center", fontFamily: 'Trebuchet MS, Helvetica, sans-serif', fontSize: '30px' }} className="mb-4 pb-2 pb-md-0 mb-md-5">
                Add Request
                    </h3>
                    <form onSubmit={signfn}>
                        <div className="col-12">
                            <div className="form-outline">
                                <label className="form-label addreqlabel">Category</label>
                                <input type="text" className="form-control form-control-lg addreqinput" onChange={onChange} name="Category" value={data.Category}></input>
                            </div>
                        </div>
                                <br></br>
                        <div className="row">
                                <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <label className="form-label addreqlabel">Title</label>
                                    <input type="text" className="form-control form-control-lg addreqinput" onChange={onChange} name="Title" value={data.Title}></input>
                                </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                            <label className="form-label addreqlabel">Deadline</label>
                            <input type="date" className="form-control form-control-lg addreqinput" onChange={onChange} name="Deadline" value={data.Deadline}></input>
                            </div>
                        </div>
                        </div>
                    <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label addreqlabel">Contact Information</label>
                        <input type="email" className="form-control form-control-lg addreqinput" onChange={onChange} name="Contactinformation" value={data.Contactinformation}></input>
                      </div>
                    </div>
                        <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                                <label className="form-label addreqlabel">Budget</label>
                                <input type="number" className="form-control form-control-lg addreqinput" onChange={onChange} name="Budget" value={data.Budget}></input>
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                            <div className="form-outline datepicker w-100">
                                    <label className="form-label addreqlabel">Description</label>
                                    <input type="text" className="form-control form-control-lg addreqinput" onChange={onChange} name="Description" value={data.Description}></input>
                                </div>
                            </div>
                                <div className="connect" style={{ textAlign: 'center', marginTop: '20px' }}>
                                <button type="submit" style={{ width: '300px', backgroundColor: "darkgreen", border: 'none', height: "40px", fontSize: '20px' }} className="btn btn-primary">Submit</button>
                            </div>
            </form>
            </div>
                </div>
            </div>
            </div>
         </div>
        </section>
        </div>
    );
}

export default Addrequest;


