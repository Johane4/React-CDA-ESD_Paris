// src/App.js
import ThemeProvider from "./context/ThemeContext";
import Header from "./components/Header";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <main style={{ padding: "20px" }}>
        <p>Contenu de l'application</p>
      </main>
    </ThemeProvider>
  );
};

export default App;
