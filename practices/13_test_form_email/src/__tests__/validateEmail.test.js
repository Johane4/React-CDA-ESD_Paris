import validateEmail from "../utils/validateEmail";

/*
  Tests unitaires de la fonction validateEmail
*/

describe("validateEmail", () => {
  test("email valide retourne true", () => {
    expect(validateEmail("test@email.com")).toBe(true);
  });

  test("email sans @ retourne false", () => {
    expect(validateEmail("testemail.com")).toBe(false);
  });

  test("email sans domaine retourne false", () => {
    expect(validateEmail("test@email")).toBe(false);
  });

  test("email vide retourne false", () => {
    expect(validateEmail("")).toBe(false);
  });

  test("email non string retourne false", () => {
    expect(validateEmail(123)).toBe(false);
  });
});
