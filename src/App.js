import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Diana's Dictionary</h1>
        </header>{" "}
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            Coded by Diana Menendez,
            <a href="https://github.com/itsdianaa21/dictionary-project.git"> open-sourced </a> on github.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
