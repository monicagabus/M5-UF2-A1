const { CalculaTipo } = require("./indexNOK.js");

describe("Función CalculaTipo", () => {
  
  test("Comprobación caso 5", () => {
    expect(CalculaTipo(1000, 0)).toBe(5);
  });
  test('Comprobación caso 4', () => {
    expect(CalculaTipo(1000, 400)).toBe(4);
  });
  test("Comprobación caso 3", () => {
    expect(CalculaTipo(300, 100)).toBe(3);
  });
  test('Comprobación caso 2', () => {
    expect(CalculaTipo(300, 150)).toBe(2);
  });
  test("Comprobación caso 1", () => {
    expect(CalculaTipo(800, 500)).toBe(1);
  });
  test("Comprobación caso 0", () => {
    expect(CalculaTipo(500, 500)).toBe(0);
  });
  
});

//Este conjunto de pruebas se ha elegido para garantizar que la función se comporte correctamente en todos los escenarios definidos en la lógica de negocio, de acuerdo con el criterio CORRECT. 
//Cada caso representa una situación que puede ocurrir en el uso real de la función, permitiendo verificar que devuelve el valor esperado en cada caso.