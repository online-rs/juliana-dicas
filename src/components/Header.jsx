// Header.jsx
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Botão do menu hambúrguer */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        
        {/* Logo e título */}
        <div className="logo-container">
          <img src="./public/logo.png" alt="Logo Dicas da Juliana" className="logo" />
          <h1 className="site-title">Dicas da Juliana</h1>
        </div>
        
        {/* Navegação */}
        <nav className={`nav ${menuActive ? 'menu-active' : ''}`}>
          <button className="close-menu" onClick={closeMenu}>×</button>
          <ul className="menu">
            <li><a href="#inicio" onClick={closeMenu}>Início</a></li>
            <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#categorias" onClick={closeMenu}>Categorias</a></li>
            <li><a href="#promocoes" onClick={closeMenu}>Promoções</a></li>
            <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
