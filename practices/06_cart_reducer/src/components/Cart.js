import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, total } = useContext(CartContext);

  return (
    <div>
      <h2>Panier</h2>

      {items.length === 0 && <p>Panier vide</p>}

      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - {item.price} € x
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            />
          </p>

          <button onClick={() => removeItem(item.id)}>Supprimer</button>
        </div>
      ))}

      <h3>Total : {total} €</h3>
    </div>
  );
};

export default Cart;
