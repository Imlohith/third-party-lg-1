// import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import ProtectedRoute from './routes/ProtectedRoute'
import Profile from './pages/profile/Profile'
import { useKeycloak } from '@react-keycloak/web';

function App() {
  const { keycloak, initialized } = useKeycloak();
  if (!initialized) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
