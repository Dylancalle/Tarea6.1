import esBisiesto from "./esBisiesto"

describe("Es bisiesto", () => {
    it("deberia considerar al 4", () => {
      expect(esBisiesto(4)).toEqual(true);
    });
    it("deberia considerar al 4 y a los multiplos de 4", () => {
        expect(esBisiesto(8)).toEqual(true);
      });
    it("deberia considerar al 400 y a los multiplos de 400", () => {
    expect(esBisiesto(400)).toEqual(true);
    });
    it("deberia considerar a los años divisibles por 100, pero no por 400 como no bisiesto", () => {
    expect(esBisiesto(1700)).toEqual(false);
    });
    it("deberia ser un numero divisible por 4, pero no por 100", () => {
        expect(esBisiesto(500)).toEqual(false);
    });

});