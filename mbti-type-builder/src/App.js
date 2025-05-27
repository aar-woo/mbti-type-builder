import "./App.css";
import Header from "./components/Header.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
