import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

/*
  Page protégée
*/

const Profile = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Mon profil</h1>
      <p>Bienvenue dans votre espace personnel.</p>

      <button onClick={logout}>Se déconnecter</button>
    </div>
  );
};

export default Profile;
