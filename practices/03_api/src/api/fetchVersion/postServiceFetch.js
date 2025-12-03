import { apiClientFetch } from "./apiClientFetch";

export const postServiceFetch = {
  // Récupérer tous les posts
  getAll: () => apiClientFetch.get("/posts"),

  // --------- Récupérer un post par ID ---------
  getById: (id) => apiClientFetch.get(`/posts/${id}`),
};
