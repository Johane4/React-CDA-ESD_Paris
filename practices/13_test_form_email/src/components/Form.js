import { useState } from "react";
import validateEmail from "../utils/validateEmail";

/*
  Composant :
  formulaire de validation d'email
*/

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Utilisation de la fonction métier
    if (validateEmail(email)) {
      setMessage("Email valide");
    } else {
      setMessage("Email invalide");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Valider</button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default Form;
