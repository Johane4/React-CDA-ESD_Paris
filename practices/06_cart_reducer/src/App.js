import { CartProvider } from "./context/CartProvider";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

/*
  COURS :
  Le Provider englobe toute l'application
  pour rendre le panier accessible partout
*/

const App = () => {
  return (
    <CartProvider>
      <ProductList />
      <Cart />
    </CartProvider>
  );
};

export default App;
