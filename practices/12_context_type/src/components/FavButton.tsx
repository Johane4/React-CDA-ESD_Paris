// src/components/FavoriteButton.tsx
import { useFav } from "../context/FavContext";

/*
  Bouton pour ajouter / retirer un favori
*/

interface FavButtonProps {
  itemId: number;
}

const FavButton = ({ itemId }: FavButtonProps) => {
  const { fav, addFav, removeFav } = useFav();

  const isFav = fav.includes(itemId);

  const handleClick = () => {
    isFav ? removeFav(itemId) : addFav(itemId);
  };

  return (
    <button onClick={handleClick}>
      {isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
    </button>
  );
};

export default FavButton;
