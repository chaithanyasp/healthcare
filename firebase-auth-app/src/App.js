// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import { useEffect, useState } from 'react';
import Login from './Login/Login';
// import { auth } from './firebase';
// import { onAuthStateChanged, signOut } from "firebase/auth";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Analytics from "./Pages/Analytics";
import Patients from "./Pages/Patient";
import Signup from "./Login/SignUp";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      
        <Route path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
             </PrivateRoute>
          }
        />
        <Route path="/analytics"
  element={
    <PrivateRoute>
      <Analytics />
    </PrivateRoute>
  }
/>
 <Route path="/patientDetails"
  element={
    <PrivateRoute>
      <Patients />
    </PrivateRoute>
  }
/>
      </Routes>
    </Router>
  );
}
export default App;
