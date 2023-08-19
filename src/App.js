import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Diana's Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            Coded by Diana Menendez, is{" "}
            <a
              href="https://github.com/itsdianaa21/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-source
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://main--melodious-kataifi-17a090.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
