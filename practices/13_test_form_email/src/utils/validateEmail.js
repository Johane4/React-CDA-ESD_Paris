/*
  Fonction métier :
  On vérifie si un email est valide ou non
*/

const validateEmail = (email) => {
  // Vérifie que l'entrée dans le champs est une string
  if (typeof email !== "string") {
    return false;
  }

  // Regex simple pour l'email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};

export default validateEmail;
