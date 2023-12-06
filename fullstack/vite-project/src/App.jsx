import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LoginForm from './components/LoginPage';
import RegisterForm from './components/RegisterPage';
import ForgotForm from './components/ForogotPasswordPage';
import Movie from './components/Movie';
import HomePage from './components/homepage';
import NavBar from './components/Navbar';
import Profile from './components/profile';



// Dans votre composant App ou équivalent


// Navbar component
// Navbar component

const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.style.backgroundColor = location.pathname === '/login' ? 'votre' : 'yuzaehbjn';
  }, [location.pathname]);

  return (
    <div className="app">
      <NavBar />
      <Routes>
      <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot" element={<ForgotForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

