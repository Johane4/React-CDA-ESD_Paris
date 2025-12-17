import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";

/*
  COURS :
  Le Provider englobe l'application
  et fournit l'état + les actions
*/

const initialState = {
  items: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  //  Ajouter au panier
  const addItem = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  // Supprimer du panier
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // Modifier quantité
  const updateQuantity = (id, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity },
    });
  };

  // Calcul du total
  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        updateQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
