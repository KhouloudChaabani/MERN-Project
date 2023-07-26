import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; // Import Axios library
import "./Navbar.css";

const Navbar = (props) => {
  const [user, setUser] = useState(props.user);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
      .then(res => {
        setUser(null); // Clear the user state on successful logout
        
        console.log(res.data);
      })
      .catch(err => console.log(err));

    navigate('/');
  };

  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img className='img' src="./logo1.png" alt="logo" width={100} />
        <div className="flexCenter h-menu">
          <Link to='/'>Home</Link>
          <Link to='/f'>Find your Consultant</Link>
          <Link to='/d'>Explore</Link>

          {(user)? (
            // Render logout button if the user is logged in
            <button className='button' onClick={handleLogout}>Logout</button>
          ) : (
            // Render login and signup links if the user is not logged in
            <>
              <Link to='/log'>Log in</Link>
              <button className='button'>
                <Link to='/reg'>Sign up</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;