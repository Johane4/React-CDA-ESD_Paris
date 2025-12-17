import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import RouterSection from "./components/RouterSection";
import TypeScriptSection from "./components/TypeScriptSection";
import TestingSection from "./components/TestingSection";
// import Exemple from "./components/Exemple";

const App = () => {
  return (
    // <BrowserRouter>
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <RouterSection />
        <TypeScriptSection />
        <TestingSection />
        {/* 
          <Routes>
            <Route path="/exemple" element={<Exemple />} />
          </Routes> */}
      </main>
      <Footer />
    </div>
    // </BrowserRouter>
  );
};

export default App;
