import "./App.css";
import PostsApi from "./components/PostsApi";
import PostApiFilter from "./components/PostApiFilter";

const App = () => {
  return (
    <div className="App">
      <h1>Requête API et gestion tri-état</h1>
      <PostsApi />
      <PostApiFilter />
    </div>
  );
};

export default App;
