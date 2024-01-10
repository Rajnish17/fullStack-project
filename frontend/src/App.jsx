import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound';
import AdminPage from './Components/Page/AdminPage';
import UserPage from "./Components/Page/UserPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminPage />} />
        <Route path="/user-dashboard" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
