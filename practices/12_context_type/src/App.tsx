// src/App.tsx
import FavProvider from "./context/FavContext";
import FavList from "./components/FavList";

/*
  App principale
*/

const App = () => {
  return (
    <FavProvider>
      <FavList />
    </FavProvider>
  );
};

export default App;
