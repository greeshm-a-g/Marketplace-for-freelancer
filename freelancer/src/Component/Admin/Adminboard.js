import React from 'react'
import { GrConnect } from "react-icons/gr";
import { useEffect,useState } from 'react';
import axios from 'axios';
function Adminboard() {
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
    const [viewfree, setviewfree] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:4000/viewallfreelancer')
      .then((result) => {
        console.log(result);
        setviewfree(result.data.data);
        console.log(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [myrequest, setmyrequest] = useState([]);
    axios.get('http://localhost:4000/myrequest')
      .then((result) => {
        console.log(result);
        setmyrequest(result.data.data);  
        console.log(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  
  return (
    <div>
 <div style={{color:'#032f3b',textAlign:'center'}}>
           <h1>Connect</h1>
           <GrConnect style={{height:'50px',width:'50px'}}/> 
</div>
     <div className= "content threecard">
        <div class="container-fluid">
            <div class="row">
          <div class="col-12 col-md-6 col-lg-3 mb-4">
                    <div class="card showcards">
                        <div class ="card-body">
                            <h5 class="card-title">Approved User</h5>
                            {view.length?(
                            <h1>{view.length}</h1>
                        ):(
                            <h3>No Data</h3>
                        )
                        }
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                    <div class="card showcards">
                        <div class="card-body">
                            <h5 class="card-title"> Total Freelancer</h5>
                {viewfree.length ? (
                <h1>{viewfree.length}</h1>
              ) : (
                <h3>No Data</h3>
              )}
              </div>
              </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                    <div class="card showcards">
                        <div class="card-body">
                            <h5 class="card-title">Job Posted</h5>
                            {myrequest.length ? (
                <h1>{myrequest.length}</h1>
              ) : (
                <h3>No Data</h3>
              )}
              </div>
              </div>
                </div>
            </div>
            
        </div>
    </div> 
    </div>
  )
}

export default Adminboard