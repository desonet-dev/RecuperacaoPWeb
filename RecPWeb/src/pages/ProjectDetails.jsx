import { useParams, Link } from 'react-router-dom';
import '../index.css';
import { projectsList } from '../pages/Projects';

export default function ProjectDetails() {
  const { id } = useParams();

  return (
    <main className="project-details-container">
      <h1 className="title-light">PROJETOS</h1>
      <h2 className="title-bold">Detalhes do Projeto {id}</h2>
      
      <div className="project-content">
        <p>
          Detalhes do Projeto {id}.
        </p>
        <div className="placeholder-image"> 
            <img src={projectsList.find(project => project.id === id)?.image} alt={`Projeto ${id}`} />
        </div>
      </div>

      <Link to="/projetos" className="btn-back">
        ← Voltar para Projetos
      </Link>
    </main>
  );
}