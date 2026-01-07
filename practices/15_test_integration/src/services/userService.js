/*
  Service responsable de l'appel API
  Séparation logique / UI
*/

export const fetchUsers = async () => {
  const response = await fetch("https://api.example.com/users");

  if (!response.ok) {
    throw new Error("Erreur API");
  }

  return response.json();
};
