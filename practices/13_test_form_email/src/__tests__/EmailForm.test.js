import { render, screen, fireEvent } from "@testing-library/react";
/* render    : affiche le composant sans avoir besoin d'un navigateur
   screen    : cherche un élément donné dans ce composant
   fireEvent : sinon l'action de l'utilisateur
*/
import Form from "../components/Form";

/*
  Test du composant Form
*/

describe("Form", () => {
  test("affiche un message d'erreur pour un email invalide", () => {
    render(<Form />);

    const input = screen.getByPlaceholderText("Votre email");
    const button = screen.getByText("Valider");

    fireEvent.change(input, {
      target: { value: "emailinvalide" },
    });

    fireEvent.click(button);

    expect(screen.getByText("Email invalide")).toBeInTheDocument();
  });

  test("affiche un message de succès pour un email valide", () => {
    render(<Form />);

    const input = screen.getByPlaceholderText("Votre email");
    const button = screen.getByText("Valider");

    fireEvent.change(input, {
      target: { value: "test@email.com" },
    });

    fireEvent.click(button);

    expect(screen.getByText("Email valide")).toBeInTheDocument();
  });
});
