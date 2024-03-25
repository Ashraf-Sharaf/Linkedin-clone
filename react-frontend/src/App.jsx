import React from "react";
import "./styles/utilities.css";
import "./pages/Authentication/login-signup.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/login";


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
