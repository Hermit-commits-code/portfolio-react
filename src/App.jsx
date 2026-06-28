import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import "./App.css";
import Hero from "./components/home/Hero.jsx";

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main id="home" className="home">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default App;
