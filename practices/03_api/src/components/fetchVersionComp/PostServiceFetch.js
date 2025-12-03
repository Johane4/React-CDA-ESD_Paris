import { useEffect, useState } from "react";
import { postService } from "../api/postService";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // la gestion des erreurs a été faite lors de la centralisation de l'apiClient donc pas besoin ici de mettre un try catch
  // Si besoin d'un bloc trycatch, il faudrait passer par une fonction asynchrone async/await
  useEffect(() => {
    // const loadPosts = async () => {
    //   try {
    // --- Récupération de tous les posts ---
    const data = /*await*/ postService.getAll();
    setPosts(data);

    // --- Exemple getById ---
    const post = /*await*/ postService.getById(1);
    console.log("Post 1 :", post);
    // } catch (err) {
    setError("Impossible de charger les posts.");
    // } finally {
    setLoading(false);
    // }
    // };

    // loadPosts();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error)
    return <p style={{ color: "red" }}>Erreur de chargement : {error}</p>;

  return (
    <div>
      <h1>Liste des posts avec centralisation API</h1>
      {posts.slice(0, 10).map((p) => (
        <div key={p.id} style={styles.card}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "6px",
  },
};
