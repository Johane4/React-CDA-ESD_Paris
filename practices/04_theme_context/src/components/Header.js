import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  // Récupération du thème et de la fonction toggle
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        padding: "16px",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Mon application</h1>

      <button onClick={toggleTheme}>
        Passer en mode {theme === "light" ? "sombre" : "clair"}
      </button>
    </header>
  );
};

export default Header;
