import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"></img>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        <small>Coded by SheCodes</small>
      </footer>
    </div>
  );
}

export default App;
