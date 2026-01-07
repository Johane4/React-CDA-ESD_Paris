import { Link } from "react-router-dom";
import { posts } from "../data/posts";

/*
  Page qui affiche la liste des posts
*/

const Posts = () => {
  return (
    <div>
      <h1>Liste des posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/* Lien avec ID dans l'URL */}
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
