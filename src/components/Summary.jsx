import React from 'react';
import '../styles/Summary.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Summary() {
  return (
    <footer className="footer">
      <p>Desenvolvido por Camila Gonçalves</p>
      <div className="contact-links">
        <a href="https://github.com/CamilGon" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/camila-gons" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} /> LinkedIn
        </a>
        <a href="mailto:dev.camilagon@gmail.com">
          <FaEnvelope size={20} /> dev.camilagon@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Summary;
