import React from 'react';
import '../styles/Profile.css';
import '../styles/Skills.css';
import profilePic from '../assets/profile.jpeg'; 


function Profile() {
  const softSkills = [
    'Comunicação',
    'Trabalho em Equipe',
    'Empatia',
    'Liderança',
    'Criatividade'
  ];

  const hardSkills = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML/CSS',
    'Git'
  ];

  return (
    <>
    <div className="profile">
      <section className="infos-conteiner">
        <div className="infos-img">
          <img src={profilePic} alt="Foto de perfil" className="profile-img" />
        </div>
        <div className="infos-dados">
          <h1 className="profile-name">Camila Gonçalves</h1>
          <h2 className="profile-title">Analista de Sistemas/Desenvolvedora</h2>
          <p className="profile-description">
          Sou uma analista de sistemas e desenvolvedora, com uma paixão crescente por tecnologia e inovação. Ao longo da minha carreira, trabalhei em diversas áreas, como análise de dados, gestão de equipes e atendimento ao cliente. Atualmente, sou desenvolvedora full-stack com expertise em JavaScript, React, Node.js, Redux, React Hooks, MySQL e Postgres. Além das competências técnicas, valorizo a comunicação clara, a resolução criativa de problemas e o trabalho colaborativo. Tenho como objetivo seguir evoluindo e aplicando minhas habilidades em projetos desafiadores. </p>
        </div>
      </section>
      <section className="skills">
      <h2>Minhas Skills</h2>
      <div className="skills-container">
        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="hard-skills">
          <h3>Hard Skills</h3>
          <ul>
            {hardSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      </section>
   
   
    </div>
    </>
  );
}

export default Profile;
