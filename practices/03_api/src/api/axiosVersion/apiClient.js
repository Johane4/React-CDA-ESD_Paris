import axios from "axios";

// URL de base
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// Instance Axios centralisée
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur de réponse (optionnel mais ça reste une pratique PRO)
apiClient.interceptors.response.use(
  (response) => response.data, // on retourne directement les données
  (error) => {
    console.error("Erreur chargement API :", error);
    throw error; // renvoie l’erreur pour la gestion locale
  }
);
