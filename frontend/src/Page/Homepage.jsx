import React from 'react';
import Home from "../Components/Home/Home"
import Userlogin from "../Components/Home/Userlogin"
import UserSignup from "../Components/Home/UserSignup"
import AdminSignup from "../Components/Home/AdminSignup"
import AdminLogin from "../Components/Home/AdminLogin"

import { Route, Routes } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-login" element={<Userlogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
      </Routes>
    </>
  );
};

export default Homepage;
