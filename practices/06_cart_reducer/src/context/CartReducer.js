/*
  COURS :
  Le reducer est une fonction PURE :
  - elle reçoit l'état actuel
  - elle reçoit une action
  - elle retourne un NOUVEL état
*/

export const cartReducer = (state, action) => {
  switch (action.type) {
    // Ajouter un produit
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    // Supprimer un produit
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    // Modifier la quantité
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};
