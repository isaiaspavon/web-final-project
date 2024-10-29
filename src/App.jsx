// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg';

import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {
  return (
    <Router>
      <Navigation /> {/* Navigation Bar */}
      <Routes>
        <Route path="/" element={<Home />} />   {/* Home Page */}
        <Route path="/login" element={<Login />} />   {/* Login Page */}
        <Route path="/signup" element={<SignUp />} />   {/* SignUp Page */}
      </Routes>
    </Router>
  )
}

export default App;
