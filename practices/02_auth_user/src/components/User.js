import { useState, useEffect } from "react";

/**
 * EXERCICE 2 : Effets conditionnels
 * ------------------------------------------------------------
 * Le titre de la page change UNIQUEMENT si l'utilisateur est connecté.
 * Aucun context, aucune API, juste une simulation locale.
 */

const User = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // Effet conditionnel : exécuté seulement lorsqu'un utilisateur est connecté
    if (isLogged) {
      document.title = "Bienvenue sur votre espace !";
      console.log("Titre mis à jour car l'utilisateur est connecté");
    } else {
      document.title = "Application React";
      console.log("Utilisateur déconnecté → titre réinitialisé");
    }

    /**
     * Pas besoin de cleanup ici :
     * Nous ne créons pas d'abonnement, pas de timer, pas d'écouteur.
     */
  }, [isLogged]); // Effet exécuté uniquement lorsque isLogged change

  return (
    <div style={styles.container}>
      <h1>Exercice 2 : Effets conditionnels</h1>

      <p>
        Statut utilisateur :{" "}
        <strong>{isLogged ? "Connecté" : "Non connecté"}</strong>
      </p>

      <h2 style={styles.title}>
        {isLogged ? "Bienvenue dans votre espace" : "Veuillez vous connecter"}
      </h2>

      <button style={styles.button} onClick={() => setIsLogged(!isLogged)}>
        {isLogged ? "Se déconnecter" : "Se connecter"}
      </button>

      <p style={{ marginTop: "15px", fontSize: "0.9em", color: "#666" }}>
        Le titre de la page change seulement si l'utilisateur est connecté.
      </p>
    </div>
  );
};

export default User;

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "300px",
    fontFamily: "Arial",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer",
    marginTop: "10px",
  },

  title: {
    color: "green",
  },
};
