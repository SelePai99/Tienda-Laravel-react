// src/components/NavBar.js

import React from 'react';
import logoImage from '../assets/logo.jpg';
import './NavBar.css';
import { Link } from 'react-router-dom';
import './pro/CreateProducts.js';

const NavBar = () => {
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/login">Iniciar sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
            <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
          </ul>
        </nav>
      </div>
      <div className="sub-nav-bar">
        <nav>
          <ul>
            <li><Link to="/usuario">Cuidado Personal</Link></li>
            <li><a href="#">Tratamiento facial</a></li>
            <li><a href="#">Accesorios</a></li>
            <li><Link to="/pro">Crear producto</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
