import '../index.css';

export default function Contact() {
  return (
    <main className="contact-page-container">
      <div className="contact-info-side">
        <h1 className="title-light">Informações de</h1>
        <h2 className="title-bold">Contato</h2>

        <div className="company-info">
          <h3>Digital Project</h3>
          <p>1234 Sample Street Austin Texas 76401</p>
          <p className="phone">512.333.2222</p>
          <p className="email">digitalproject@gmail.com</p>
        </div>

        <button className="btn-contact-us">Contate Nos</button>
      </div>

      <div className="map-side">
        <img src="https://img.odcdn.com.br/wp-content/uploads/2018/12/20181218065336.jpg" alt="Mapa de localização" className="map-image" />
      </div>
    </main>
  );
}