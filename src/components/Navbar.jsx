import React from "react";
import { Link } from 'react-scroll';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
      <Link to="profile" smooth={true} duration={500} className="nav-item">Perfil</Link>
      <Link to="projects" smooth={true} duration={500} className="nav-item">Projetos</Link>
      <Link to="social-preview" smooth={true} duration={500} className="nav-item">Contato</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
