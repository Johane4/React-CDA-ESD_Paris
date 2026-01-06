import FavButton from "./FavButton";

/*
  Liste simulée d'éléments
*/

const items = [
  { id: 1, name: "Produit A" },
  { id: 2, name: "Produit B" },
  { id: 3, name: "Produit C" },
];

const FavList = () => {
  return (
    <div>
      <h1>Produits</h1>

      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <FavButton itemId={item.id} />
        </div>
      ))}
    </div>
  );
};

export default FavList;
