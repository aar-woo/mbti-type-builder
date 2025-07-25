import "./App.css";
import Header from "./components/Header.tsx";
import TypeCardPage from "./pages/TypeCardPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AppLayoutContainer from "./layout/AppLayoutContainer.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

function LayoutContainer() {
  return (
    <AppLayoutContainer>
      <Outlet />
    </AppLayoutContainer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header className="app-header">
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
          <Route index element={<HomePage />} />
          <Route
            path="/personality-type/:typeParam"
            element={<TypeCardPage />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
