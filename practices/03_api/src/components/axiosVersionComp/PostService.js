import { useEffect, useState } from "react";
import { postService } from "../../api/axiosVersion/postService";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await postService.getAll();
        setPosts(data);
      } catch (err) {
        setError("Impossible de charger les posts.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
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
