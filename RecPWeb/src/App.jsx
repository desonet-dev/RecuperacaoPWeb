import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}