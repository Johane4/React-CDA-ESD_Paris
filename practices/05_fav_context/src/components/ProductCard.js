import { useContext } from "react";
import { FavContext } from "../context/FavContext";

const ProductCard = ({ product }) => {
  const { fav, addFav, removeFav } = useContext(FavContext);

  const isFav = fav.some((item) => item.id === product.id);

  return (
    <div style={{ border: "1px solid #ccc", padding: "12px" }}>
      <h3>{product.name}</h3>

      {isFav ? (
        <button onClick={() => removeFav(product.id)}>
          ❌ Retirer des favoris
        </button>
      ) : (
        <button onClick={() => addFav(product)}>❤️ Ajouter aux favoris</button>
      )}
    </div>
  );
};

export default ProductCard;
