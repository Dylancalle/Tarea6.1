import esBisiesto from "./esBisiesto"

describe("Es bisiesto", () => {
    it("deberia considerar al 4", () => {
      expect(esBisiesto(4)).toEqual(true);
    });
    it("deberia considerar al 4 y a los multiplos de 4", () => {
        expect(esBisiesto(8)).toEqual(true);
      });
    it("deberia considerar a los años divisibles por 100, pero no por 400", () => {
    expect(esBisiesto(1700)).toEqual(false);
});
  });