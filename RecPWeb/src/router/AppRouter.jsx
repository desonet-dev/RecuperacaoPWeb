import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';
import About from '../pages/About';
import Contact from '../pages/Contact';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/projetos/:id" element={<ProjectDetails />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}