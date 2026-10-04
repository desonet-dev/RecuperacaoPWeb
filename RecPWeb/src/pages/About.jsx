import '../index.css';

export default function About() {
  const photos = [
    'https://images.pexels.com/photos/34146427/pexels-photo-34146427.jpeg', 'https://images.pexels.com/photos/33876026/pexels-photo-33876026.jpeg', 'https://images.pexels.com/photos/27797720/pexels-photo-27797720.jpeg', 'https://images.pexels.com/photos/34146428/pexels-photo-34146428.jpeg', 'https://images.pexels.com/photos/3681805/pexels-photo-3681805.png',
    'https://images.pexels.com/photos/34146425/pexels-photo-34146425.jpeg', 'https://images.pexels.com/photos/38893502/pexels-photo-38893502.jpeg', 'https://images.pexels.com/photos/38575101/pexels-photo-38575101.jpeg', 'https://images.pexels.com/photos/27913388/pexels-photo-27913388.jpeg', 'https://images.pexels.com/photos/34146421/pexels-photo-34146421.jpeg',
  ];

  return (
    <main className="gallery-container">
      <h1 className="title-light">Galeria de</h1>
      <h2 className="title-bold">Fotos</h2>

      <div className="photo-grid">
        {photos.map((src, index) => (
          <div key={index} className="photo-item">
            <img src={src} alt={`Galeria ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        <span>01 / 05</span>
        <button className="nav-arrow">←</button>
        <button className="nav-arrow">→</button>
      </div>
    </main>
  );
}