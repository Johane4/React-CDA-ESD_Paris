import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

/*
  Page de connexion simple
*/

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/profile");
  };

  return (
    <div>
      <h1>Connexion</h1>
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

export default Login;
