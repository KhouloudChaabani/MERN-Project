import React , { useState }from 'react'
import Header from '../../components/Header/Header'
import Consultant from '../../components/consultant/Consultant'
import Apply from '../../components/Apply/Apply'
import Value from '../../components/Value/Value'


// import { Value } from 'sass'
const Home = (props) => {
  const [user,setUser]=useState(props.user)
  return (
    <div className='Home'>
    <div>
    
     <Header/>
     <div className='white-gradientt'/>
    </div>
    <Consultant/>
     <Apply/>
     <Value/>
     
    </div>
  )
}

export default Home