import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';


function Main_client(props) {

    const [services, setServices] = useState([]);
    const nav = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/services',{withCredentials: true})
            .then(res=>{
                setServices(res.data);
                console.log(res.data);
            })
            .catch((err) => {console.error(err);
                if (err.response.status === 401)
                {nav("/unautorized", {replace:true});}
            })
    },[]);

  return (
    <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Law Consultant </th>
                        <th>Service </th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Link to Video Call</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map( (service, i) =>
                    service.appointments.map( (appointment,i)=>
                    (appointment.name===props.name) ? 
                        <tr>
                        <td>{props.name}</td>
                        <td>{service.category}</td>
                        <td>{service.price} DT</td>

                            <td>{appointment.date}</td>
                            <td><button onClick={()=>window.open(`https://localhost:3003/r/${appointment.link}`)} className='btn btn-warning'>Start Video Call</button></td>
                        </tr>
                        : <></>
                        )
                    )}
                </tbody>
            </table>
        
        </div>
  )
}

export default Main_client