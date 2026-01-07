import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

/*
  Page de détail d'un post
*/

const PostDetail = () => {
  const { id } = useParams();

  // Recherche du post correspondant à l'ID
  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return <p>Post introuvable</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <Link to="/posts">⬅ Retour à la liste</Link>
    </div>
  );
};

export default PostDetail;
