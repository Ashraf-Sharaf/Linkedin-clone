import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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