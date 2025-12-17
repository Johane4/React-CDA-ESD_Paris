import { createContext, useState } from "react";

/*
  Le contexte permet de partager un état global
  (ici : le thème clair/sombre) dans toute l’application
*/

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // État global du thème
  const [theme, setTheme] = useState("light");

  // Fonction pour changer le thème
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
