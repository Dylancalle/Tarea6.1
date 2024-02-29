import esBisiesto from "./esBisiesto"

describe("Es bisiesto", () => {
    it("deberia considerar al 4", () => {
      expect(esBisiesto(4)).toEqual(true);
    });
    it("deberia considerar al 4 y a los multiplos de 4", () => {
        expect(esBisiesto(8)).toEqual(true);
      });
  });