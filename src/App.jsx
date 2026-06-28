import Container from "./components/layout/Container";
import "./App.css";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <Container>
          <div className="app__content">
            <h1>Portfolio</h1>
            <p>The React Foundation is ready.</p>
          </div>
        </Container>
      </main>
    </>
  );
}

export default App;
