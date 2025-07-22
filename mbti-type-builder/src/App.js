import "./App.css";
import Header from "./components/Header.tsx";
import TypeCardPage from "./pages/TypeCardPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter className={"App"}>
      <header className="app-header">
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="test" element={<TypeCardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
