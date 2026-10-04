import { Link } from 'react-router-dom';
import '../index.css';
import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="..\src\assets\logoBranca.png" alt="Digital Project Logo" />
        </div>

        <div className="footer-col">
          <h4>Informações</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Galeria</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/contato">Contatos</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacts</h4>
          <p><IoLocationOutline /> 1234 Sample Street, Austin Texas 78704</p>
          <p><BsFillTelephoneFill /> 512.333.2222</p>
          <p><MdEmail /> digitalproject@gmail.com</p>
        </div>

        <div className="footer-col">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaXTwitter />
            <FaLinkedin />
            <FaPinterest />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Digital Project. Todos direitos reservados</p>
      </div>
    </footer>
  );
}