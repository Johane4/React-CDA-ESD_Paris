import { useEffect, useState } from "react";
import axios from "axios";

const PostApiFilter = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setPosts(response.data);
          setLoading(false);
        });
    } catch (error) {
      setError("Impossible de charger les posts.");
      setLoading(false);
    }
  }, []);

  console.log(posts);

  // Filtrage simple : on vérifie si le titre contient ce que l'utilisateur tape
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Chargement...</p>;
  if (error)
    return <p style={{ color: "red" }}>Erreur de chargement: {error}</p>;

  return (
    <div>
      <h1>Liste des Posts</h1>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px", width: "300px" }}
      />

      {/* Affichage des posts filtrés */}
      <ul>
        {filteredPosts.length > 0 ? (
          filteredPosts.slice(0, 10).map((post) => (
            <div key={post.id} style={styles.card}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <p>Aucun post ne correspond à la recherche</p>
        )}
      </ul>
    </div>
  );
};

export default PostApiFilter;

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "6px",
    marginBottom: "10px",
    background: "#fafafa",
  },
};
