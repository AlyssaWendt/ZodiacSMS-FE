//Import route and our components
import './App.css'
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";


function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zodiacsms" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
