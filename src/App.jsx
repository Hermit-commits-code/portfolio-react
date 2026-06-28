import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import FeaturedProjects from "./components/home/FeaturedProjects.jsx";
import "./App.css";
import Hero from "./components/home/Hero.jsx";

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main id="home" className="home">
        <Hero />
        <FeaturedProjects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
