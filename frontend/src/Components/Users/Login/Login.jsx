import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import baseUrl from "../../api"
import axios from 'axios'
// import "./login.css"

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/user/login`, { email, password });
      // console.log(response);
      const role =response.data.data.role;
      const userId =response.data.data.userId;

      if (response.status == 200 && role =="admin") {
        const { token } = response.data.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        navigate('/admin-dashboard');
      }
      else if(response.status == 200 && role =="user"){
        const { token } = response.data.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        navigate('/user-dashboard');
      }

    } catch (error) {
      // console.log(error.response.data.message);
      setError(error.response.data.message);

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
            {error && <p className="error-message">{error}</p>}
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