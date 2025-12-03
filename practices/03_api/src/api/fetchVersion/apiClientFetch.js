const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const apiClientFetch = {
  // -------- GET --------
  get: async (endpoint) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`);

      if (!response.ok) {
        throw new Error("Erreur réseau lors du GET");
      }

      return await response.json();
    } catch (error) {
      console.error("Erreur:", error);
      throw error; // renvoyé au composant ou au service
    }
  },
};
