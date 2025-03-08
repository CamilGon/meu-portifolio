import React from 'react';
import { FaReact, FaGit, FaGithub, FaDocker, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaCogs } from 'react-icons/fa';
import { DiMysql, DiPostgresql, DiNpm } from 'react-icons/di';
import { SiJest, SiTypescript, SiRedux, SiSequelize, SiUbuntu } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="skills">
      <h2>Minhas habilidades</h2>
      <div className="skills-container">
        <div><FaJsSquare size={50} color="#F7DF1E" /></div> {/* JavaScript */}
        <div><SiTypescript size={50} color="#3178C6" /></div> {/* TypeScript */}
        <div><FaReact size={50} color="#61DAFB" /></div> {/* React */}
        <div><SiJest size={50} color="#C7D2D9" /></div> {/* Jest */}
        <div><FaCogs size={50} color="#A8B9CC" /></div> {/* C# */}
        <div><FaCss3Alt size={50} color="#1572B6" /></div> {/* CSS3 */}
        <div><FaDocker size={50} color="#2496ED" /></div> {/* Docker */}
        <div><FaGithub size={50} color="#181717" /></div> {/* GitHub */}
        <div><FaGit size={50} color="#F05032" /></div> {/* Git */}
        <div><FaHtml5 size={50} color="#E44D26" /></div> {/* HTML5 */}
        <div><DiMysql size={50} color="#4479A1" /></div> {/* MySQL */}
        <div><DiNpm size={50} color="#CB3837" /></div> {/* NPM */}
        <div><DiPostgresql size={50} color="#336791" /></div> {/* PostgreSQL */}
        <div><FaPython size={50} color="#306998" /></div> {/* Python */}
        <div><SiRedux size={50} color="#764ABC" /></div> {/* Redux */}
        <div><SiSequelize size={50} color="#52B0E7" /></div> {/* Sequelize */}
        <div><SiUbuntu size={50} color="#E95420" /></div> {/* Ubuntu */}
      </div>
    </div>
  );
};

export default Skills;
