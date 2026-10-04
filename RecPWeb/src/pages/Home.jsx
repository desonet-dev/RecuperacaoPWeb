import { Link } from 'react-router-dom';
import '../index.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1 className="title-light">Projeto</h1>
          <h2 className="title-bold">Lorem</h2>
          <div className="hero-controls">
            <button className="nav-arrow">←</button>
            <button className="nav-arrow">→</button>
          </div>
          <p className="page-counter">01 / 02</p>
        </div>
        <div className="hero-image-wrapper">
          <img src="https://finger.ind.br/wp-content/uploads/2025/01/post-thumbnail-23cbc7cb8cd7aad5c8f3b274af6d3f9c.jpeg" alt="Edifício Arquitetura" className="hero-img" />
          <Link to="/projetos/4" className="btn-view-project">
            VER PROJETO →
          </Link>
        </div>
      </section>

      <section className="about-section">
        <div className="about-images">
          <img src="https://bovearquitetura.com.br/wp-content/uploads/2020/06/2253559.jpeg" alt="Estrutura 1" className="img-sub-1" />
          <img src="https://bovearquitetura.com.br/wp-content/uploads/2020/06/2253559.jpeg" alt="Estrutura 2" className="img-sub-2" />
          <img src="https://bovearquitetura.com.br/wp-content/uploads/2020/06/2253559.jpeg" alt="Estrutura 3" className="img-sub-3" />
        </div>
        <div className="about-content">
          <h2>Sobre</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <Link to="/sobre" className="btn-read-more">LEIA MAIS →</Link>
        </div>
      </section>

      <section className="mission-section">
        <h2>Principais Focos</h2>
        <div className="mission-grid">
          <div className="mission-item">
            <span className="number">1</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
          </div>
          <div className="mission-item">
            <span className="number">2</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
          </div>
        </div>
      </section>

      <section className="our-projects-preview">
        <h2>Nossos projetos</h2>
        <div className="projects-grid-home">
          <div className="grid-item main-item">
            <div className="overlay">
              <h3>Projeto-amostra</h3>
              <Link to="/projetos/1">VER MAIS →</Link>
            </div>
            <img src="https://bovearquitetura.com.br/wp-content/uploads/2020/06/2253559.jpeg" alt="Sample Project" />
          </div>
          <div className="grid-item">
            <img src="https://bovearquitetura.com.br/wp-content/uploads/2020/06/2253559.jpeg" alt="Project 2" />
          </div>
          <div className="grid-item">
            <img src="https://bovearquitetura.com.br/wp-content/uploads/2020/06/2253559.jpeg" alt="Project 3" />
          </div>
          <div className="grid-item">
            <img src="https://bovearquitetura.com.br/wp-content/uploads/2020/06/2253559.jpeg" alt="Project 4" />
          </div>
          <div className="grid-item">
            <img src="https://bovearquitetura.com.br/wp-content/uploads/2020/06/2253559.jpeg" alt="Project 5" />
          </div>
        </div>
        <div className="all-projects-btn-wrapper">
          <Link to="/projetos" className="btn-all-projects">TODOS PROJETOS →</Link>
        </div>
      </section>

      <section className="home-contact">
        <h2>Contate Nos</h2>
        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Celular " required />
            <input type="email" placeholder="E-mail " required />
            <input type="text" placeholder="Interessado em " />
            <textarea placeholder="Mensagem " required rows="4"></textarea>
            <button type="submit" className="btn-send">Enviar e-mail →</button>
          </form>
          <div className="contact-image">
            <img src="https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grq6lwb4htd1/b/tecimob-production/o/media/47a656db-0352-4347-b077-c5d6bf8cfd15/sites/posts/1200x900/outside/dfc4bff1-f388-4a47-9619-902e844c730d1665107247iZPZ.jpg" alt="Contato" />
          </div>
        </div>
      </section>
    </div>
  );
}