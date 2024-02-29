import esBisiesto from "./esBisiesto"

describe("Es bisiesto", () => {
    it("deberia considerar al 4", () => {
      expect(esBisiesto(4)).toEqual(true);
    });
   
  });