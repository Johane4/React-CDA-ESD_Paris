import "./App.css";
import PostsApi from "./components/PostsApi";

const App = () => {
  return (
    <div className="App">
      <h1>Requête API et gestion tri-état</h1>
      <PostsApi />
    </div>
  );
};

export default App;
