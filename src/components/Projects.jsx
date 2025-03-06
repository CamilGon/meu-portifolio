import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Meu Portfólio',
      description: 'Um site pessoal criado com React para apresentar minhas habilidades e projetos.',
      repoLink: 'https://github.com/CamilGon/camilagon-portifolio',
      demoLink: 'https://seuportfolio.com'
    },
    {
      title: 'Paleta de cores',
      description: 'Este foi o meu primeiro projeto desenvolvido em JavaScript. Representa um ponto de partida significativo na minha trajetória e mesmo considerando possíveis melhorias, escolhi manter sua forma original para documentar a minha evolução.',
      repoLink: 'https://github.com/CamilGon/PixelArts',
     
    },
    {
      title: 'Formulário de Avaliação',
      description: 'Este foi um dos meus primeiros projetos na Trybe, onde aprendi a utilizar HTML e CSS para criar um formulário de avaliação para os alunos da Trybewarts.',
      repoLink: 'https://github.com/CamilGon/TybeWarts',
      demoLink: 'https://camilgon.github.io/TybeWarts/'
    },
    {
      title: 'Carrinho de compras',
      description: 'Este projeto é um **carrinho de compras dinâmico** que consome uma API para listar produtos e permite ao usuário adicionar ou remover itens do carrinho. Os produtos adicionados são salvos no **LocalStorage**, garantindo que os itens persistam mesmo após a atualização da página.',
      repoLink: 'https://github.com/CamilGon/Shopping-cart',
      demoLink: 'https://camilgon.github.io/Shopping-cart/'
    },
    {
      title: 'App de música',
      description: 'Esse app é uma página de busca que permite ao usuário procurar álbuns de artistas ou bandas. Ele utiliza o React e a API de álbuns para exibir resultados relacionados ao nome do artista digitado.',
      repoLink: 'https://github.com/CamilGon/Trybetunes',
      demoLink: 'https://camilgon.github.io/Trybetunes/'
    }
  ];

  return (
    <section className="projects">
      <h2>Meus Projetos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Repositório</a>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
