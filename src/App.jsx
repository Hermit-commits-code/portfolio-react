import Container from "./components/layout/Container.jsx";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import "./App.css";

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main id="home" className="app">
        <Container>
          <div className="app__content">
            <h1>Portfolio</h1>
            <p>The React foundation is ready.</p>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
