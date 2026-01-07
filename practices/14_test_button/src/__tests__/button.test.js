import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Button";

/*
  Tests du composant Button
*/

describe("Button component", () => {
  test("affiche le bon label", () => {
    render(<Button label="Valider" />);
    expect(screen.getByText("Valider")).toBeInTheDocument();
  });

  test("appelle onClick au clic", () => {
    const handleClick = jest.fn(); // fonction mock (qui simule une action)

    render(<Button label="Cliquer" onClick={handleClick} />);

    fireEvent.click(screen.getByText("Cliquer"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("ne déclenche pas onClick si désactivé", () => {
    const handleClick = jest.fn();

    render(<Button label="Désactivé" onClick={handleClick} disabled />);

    fireEvent.click(screen.getByText("Désactivé"));

    expect(handleClick).not.toHaveBeenCalled();
  });

  test("applique la variante primary par défaut", () => {
    render(<Button label="Primary" />);

    expect(screen.getByText("Primary")).toHaveClass("btn-primary");
  });

  test("applique la variante secondary", () => {
    render(<Button label="Secondary" variant="secondary" />);

    expect(screen.getByText("Secondary")).toHaveClass("btn-secondary");
  });
});
