import React from "react";
import { Link } from "react-router-dom";

const Exemple = () => {
  return (
    <nav>
      {/* Équivalent de <a> mais sans rechargement */}
      <Link to="/">Accueil</Link>
      <Link to="/products/:id">Produits</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Exemple;
