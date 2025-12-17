import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "T-shirt", price: 20 },
  { id: 2, name: "Pantalon", price: 40 },
];

const ProductList = () => {
  const { addItem } = useContext(CartContext);

  return (
    <div>
      <h2>Produits</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - {product.price} €
          </p>
          <button onClick={() => addItem(product)}>Ajouter au panier</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
