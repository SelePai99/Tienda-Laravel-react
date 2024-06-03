import React from 'react';
import './Usuario_navbar.css'; // Importa los estilos del navbar de usuario
import logoImage from '../assets/logo.jpg'; // Importa la imagen del logo desde la carpeta assets

const UsuarioNavbar = () => {
  return (
    <nav className="usuario-navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
    </nav>
  );
};

export default UsuarioNavbar;
