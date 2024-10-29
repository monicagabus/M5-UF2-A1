const { CalculaTipo } = require("./indexNOK.js");

describe("Función CalculaTipo", () => {
  
  test("Comprobación caso 5", () => {
    expect(CalculaTipo(1000, 0)).toBe(5);
  });
  
});
