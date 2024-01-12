import React from 'react';
import Navbar from "../Components/Users/Nav/Navbar";
import Login from "../Components/Users/Login/Login";
import SignUp from "../Components/Users/SignUp/SignUp";
import { Route, Routes } from 'react-router-dom';

const UserPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default UserPage;
