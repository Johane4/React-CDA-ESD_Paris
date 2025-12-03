import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import UseEffectSection from "./components/UseEffectSection";
import ApiCallsSection from "./components/ApiCallsSection";
import ContextApiSection from "./components/ContextApiSection";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <UseEffectSection />
        <ApiCallsSection />
        <ContextApiSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
