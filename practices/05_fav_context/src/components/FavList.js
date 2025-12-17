import { useContext } from "react";
import { FavContext } from "../context/FavContext";

const FavList = () => {
  const { fav } = useContext(FavContext);

  if (fav.length === 0) {
    return <p>Aucun favori pour le moment.</p>;
  }

  return (
    <div>
      <h2>Mes favoris</h2>

      <ul>
        {fav.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavList;
