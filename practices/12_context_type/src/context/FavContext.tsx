import { createContext, useState, useContext, ReactNode } from "react";

/*
  Un favori est représenté par un ID
  (dans un vrai projet ce serait un objet)
*/
type FavId = number;

/*
  Structure du contexte
*/
interface FavContextType {
  fav: FavId[];
  addFav: (id: FavId) => void;
  removeFav: (id: FavId) => void;
}

/*
  Création du contexte
*/
const FavsContext = createContext<FavContextType | undefined>(undefined);

/*
  Props du Provider
*/
interface FavProviderProps {
  children: ReactNode;
}

/*
  Provider des favoris
*/
const FavProvider = ({ children }: FavProviderProps) => {
  // Liste des favoris
  const [fav, setFav] = useState<FavId[]>([]);

  // Ajouter un favori
  const addFav = (id: FavId) => {
    setFav((prev) => {
      // On évite les doublons
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  // Supprimer un favori
  const removeFav = (id: FavId) => {
    setFav((prev) => prev.filter((favId) => favId !== id));
  };

  return (
    <FavsContext.Provider value={{ fav, addFav, removeFav }}>
      {children}
    </FavsContext.Provider>
  );
};

/*
  Hook personnalisé 
*/
export const useFav = (): FavContextType => {
  const context = useContext(FavsContext);

  if (!context) {
    throw new Error("useFav doit être utilisé dans FavProvider");
  }

  return context;
};

export default FavProvider;
