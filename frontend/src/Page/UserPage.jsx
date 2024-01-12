import React from 'react';
import Navbar from "../Components/Users/Nav/Navbar";
import UserDetails from "../Components/Users/UserPage/UserDetails"
import Banner from "../Components/Users/Banner/Banner"
import { Route, Routes } from 'react-router-dom';

const UserPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/profile" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default UserPage;
