import React,{useState}from 'react'
import axios, { Axios } from 'axios'
import {Link , useNavigate } from 'react-router-dom'
import Main from './Main'
import Main_client from "./Main_client"
import "./Navbar/Navbar.css";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Add from './Add'



const Ho = (props) => {
    const [user,setUser]=useState(props.user)
    const navigate = useNavigate()
    

  return (
    <div> 
 
    <div className="add1">
    
    <Navbar/>
        
        {(props.user.role==="Law Consultant") ? <Main name={props.userName}/> :<Main_client name={props.userName}/> }
        
    </div>
    </div>

    
  )
}

export default Ho