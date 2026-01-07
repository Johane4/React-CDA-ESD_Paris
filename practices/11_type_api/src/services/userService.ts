import { User } from "../types/types";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des utilisateurs");
  }

  const data: User[] = await response.json(); // typage strict
  return data;
};
