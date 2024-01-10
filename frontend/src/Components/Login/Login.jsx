import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import baseUrl from "../api"
import axios from 'axios'
import "./login.css"

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/user/login`, { email, password });

      if (response.status == 200) {
        const { token } = response.data.data;
        localStorage.setItem('token', token);
        navigate('/home');
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
            <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={handleLogin}>login</button>
            <p className="message">
              Not registered? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login