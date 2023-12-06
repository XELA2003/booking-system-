import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from "../img/logo.avif";
import userIcon from "../img/icon.jpg";
import { useAuth } from './AuthContext';

const NavBar = () => {
  const { user, logout } = useAuth();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Effectuez la navigation vers la page des résultats de recherche ou faites ce que vous devez faire avec le terme de recherche
    navigate(`/search?term=${searchTerm}`);
  };

  return (
    <header className={`navbar ${!visible ? 'hidden' : ''}`}>
      <nav className="left-links">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <Link to="/home" className="nav-link">Home</Link>
        {!user && <Link to="/login" className="nav-link">Login</Link>}
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Rechercher un film..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </nav>

      {user && (
        <nav className="right-links">
          <div 
            className="nav-user-profile" 
            onMouseEnter={() => setShowDropdown(true)} 
            onMouseLeave={() => setShowDropdown(false)}
          >
            <img src={userIcon} alt="Profile" className="nav-user-icon" />
            {showDropdown && (
              <div className="dropdown">
                <Link to="/profile" className="dropdown-item">Mes commentaires</Link>
                <button onClick={logout} className="dropdown-item1">Déconnexion</button>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;


