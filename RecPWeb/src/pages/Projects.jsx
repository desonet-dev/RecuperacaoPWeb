import { Link } from 'react-router-dom';
import '../index.css';

export const projectsList = [
  { id: '1', title: 'Projeto 1', image: 'https://www.guiadasemana.com.br/contentFiles/image/2017/11/FEA/principal/50562_w840h0_1510088123parque-do-ibirapuera-aleksandar-todorovic-shutterstock-296081258.jpg' },
  { id: '2', title: 'Projeto 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalsCFwRHyZFcfkoJ4uJ2nps_EeYY59SztKqX90QvioA9hp_Pqk--wI0X6&s=10' },
  { id: '3', title: 'Projeto 3', image: 'https://papodearquiteto.com.br/wp-content/uploads/Zaha-Hadid.webp' },
  { id: '4', title: 'Projeto Lorum', image: 'https://finger.ind.br/wp-content/uploads/2025/01/post-thumbnail-23cbc7cb8cd7aad5c8f3b274af6d3f9c.jpeg' },
];

export default function Projects() {
  return (
    <main className="projects-container">
      <h1 className="title-light">Nossos</h1>
      <h2 className="title-bold">Projetos</h2>

      <div className="projects-list">
        {projectsList.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <Link to={`/projetos/${project.id}`} className="btn-view">
                VER MAIS →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}