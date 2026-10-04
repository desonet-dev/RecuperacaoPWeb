import { NavLink } from 'react-router-dom';
import '../index.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src="..\src\assets\logo.png" alt="Digital Project Logo" />
        </NavLink>
      </div>
      <nav className="nav-menu">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            HOME
        </NavLink>
        <NavLink to="/sobre" className={({ isActive }) => (isActive ? 'active' : '')}>
            GALERIA
        </NavLink>
        <NavLink to="/projetos" className={({ isActive }) => (isActive ? 'active' : '')}>
            PROJETOS
        </NavLink>
        <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : '')}>
            CONTATO
        </NavLink>
      </nav>
    </header>
  );
}