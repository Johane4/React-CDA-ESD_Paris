import { createContext, useState, useEffect } from "react";

/*
  Contexte pour gérer les favoris globalement
  + persistance dans le localStorage
*/

export const FavContext = createContext();

const FavProvider = ({ children }) => {
  // Initialisation depuis localStorage
  const [fav, setFav] = useState(() => {
    const stored = localStorage.getItem("fav");
    return stored ? JSON.parse(stored) : [];
  });

  // Sauvegarde automatique à chaque changement
  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);

  // Ajouter un favori
  const addFav = (item) => {
    setFav((prev) => [...prev, item]);
  };

  // Supprimer un favori
  const removeFav = (id) => {
    setFav((prev) => prev.filter((item) => item.id !== id));
  };

  // Fournir les states et méthodes au Provider afin de les mettre à disposition des composants enfants
  return (
    <FavContext.Provider value={{ fav, addFav, removeFav }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider;
