import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./signup.css"
import baseUrl from "../api"


const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${baseUrl}/user/signup`, { fullName, email, phoneNumber, password });
       console.log(response);
      if (response.status == 201) {
        navigate('/login');
      }

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <>
      <div className="login-page">
        <div className="form">

          <form className="login-form">
            <input type="text" placeholder="fullName" onChange={(e) => { setFullName(e.target.value) }} />
            <input type="text" placeholder="phoneNumber" onChange={(e) => { setPhoneNumber(e.target.value) }} />
            <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={handleSignup}>Signup</button>
            <p className="message">
              Already registered? <Link to="/login">Login Here</Link>
            </p>
          </form>
        </div>
      </div>

    </>
  )
}

export default Signup