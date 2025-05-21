import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.tsx";
import TypesSelect from "./components/TypesSelect.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <TypesSelect />
      </main>
    </div>
  );
}

export default App;
