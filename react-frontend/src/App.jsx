import React from "react";
import "./styles/utilities.css";
import "./pages/Authentication/login-signup.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/login";
import SignupUser from "./pages/Authentication/signupuser";
import Home from "./pages/Home/Home";


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignupUser/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
