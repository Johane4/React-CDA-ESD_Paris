import { useEffect, useState } from "react";
import axios from "axios";

/**
 * EXERCICE : Appel API publique + tri-état
 * ----------------------------------------------------
 * API : https://jsonplaceholder.typicode.com/posts
 * Gestion :
 *  - loading (chargement)
 *  - error (erreur)
 *  - data (données chargées)
 */

const PostsApi = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Bien sur on trycatch obligatoirement !!!!
  useEffect(() => {
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setPosts(response.data); // données récupérées
          setLoading(false); // chargement terminé
        });
    } catch (error) {
      setError("Impossible de charger les posts.");
      setLoading(false);
    }
  }, []); // exécuter une seule fois au montage

  // --- Tri-état ---
  /* 1. */ if (loading) return <p>Chargement…</p>;
  /* 2. */ if (error)
    return <p style={{ color: "red" }}>Erreur de chargement: {error}</p>;

  return (
    <div>
      <h2>Liste des posts</h2>
      {/* 3 */}
      {posts.slice(0, 10).map((post) => (
        <div key={post.id} style={styles.card}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsApi;

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "6px",
    marginBottom: "10px",
    background: "#fafafa",
  },
};
