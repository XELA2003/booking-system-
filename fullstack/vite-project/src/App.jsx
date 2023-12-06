import React, { useEffect } from 'react';
import './App.css';
import './components/movie.css';
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
    if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/forgot') {
      document.body.style.backgroundImage = "url('https://media.pathe.fr/files/Logos/backdrop_pathe_poster.png')";
    } else {
      document.body.style.backgroundImage = 'none';
    }
  }, [location.pathname]);


  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/movies/:movieId" element={<Movie />} />
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

