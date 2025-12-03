import { apiClient } from "./apiClient";

export const postService = {
  // Récupérer tous les posts
  getAll: () => apiClient.get("/posts"),

  // Récupérer un post par ID
  getById: (id) => apiClient.get(`/posts/${id}`),
};
