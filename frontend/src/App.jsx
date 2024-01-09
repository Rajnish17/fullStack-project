import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import DashBoard from "./Components/DashBoard/DashBoard";
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<DashBoard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
