import FavProvider from "./context/FavContext";
import ProductCard from "./components/ProductCard";
import FavList from "./components/FavList";

const product = {
  id: 1,
  name: "Produit démo",
};

const App = () => {
  return (
    <FavProvider>
      <h1>Ma boutique</h1>

      <ProductCard product={product} />
      <FavList />
    </FavProvider>
  );
};

export default App;
