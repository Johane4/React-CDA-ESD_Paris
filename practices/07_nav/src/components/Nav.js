import { Link } from "react-router-dom";

/*
  Composant de navigation principal
  Link permet de naviguer sans recharger la page
*/

const Nav = () => {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Accueil
      </Link>

      <Link to="/about" style={{ marginRight: "10px" }}>
        À propos
      </Link>

      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;
