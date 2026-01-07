import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserList from "../components/UserList";
import * as userService from "../services/userService";

/*
  Mock du service API (simulation d'appel API)
  -> on contrôle les réponses
*/
jest.mock("../services/userService");

describe("UserList - Tests d'intégration", () => {
  test("affiche le loader au chargement", () => {
    userService.fetchUsers.mockReturnValue(new Promise(() => {}));

    render(<UserList />);

    expect(screen.getByText("Chargement...")).toBeInTheDocument();
  });

  test("affiche les utilisateurs en cas de succès", async () => {
    userService.fetchUsers.mockResolvedValue([
      { id: 1, name: "Hubert" },
      { id: 2, name: "Chantal" },
    ]);

    render(<UserList />);

    expect(await screen.findByText("Hubert")).toBeInTheDocument();
    expect(screen.getByText("Chantal")).toBeInTheDocument();
  });

  test("affiche un message d'erreur en cas d'échec", async () => {
    userService.fetchUsers.mockRejectedValue(new Error("Erreur API"));

    render(<UserList />);

    expect(
      await screen.findByText("Impossible de charger les utilisateurs")
    ).toBeInTheDocument();
  });
});
