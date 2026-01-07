import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

/*
  Composant qui protège une route
*/

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    // Redirection vers la page login
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
