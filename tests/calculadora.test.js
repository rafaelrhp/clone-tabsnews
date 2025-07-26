const calculadora = require("../models/calculadora.js");

test('somar 2 + 2 deveria retornar 4', () => {
    const resultado = calculadora.somar(2, 2);
    expect(resultado).toBe(4);
})

test('somar 5 + 100 deveria retornar 105', () => {
    const resultado = calculadora.somar(5, 100);
    expect(resultado).toBe(105);
})

test("somar 'banana' + 100 deveria retornar 'erro'", () => {
    const resultado = calculadora.somar("banana", 100);
    expect(resultado).toBe("Erro");
})


test("Dividir 1 / 1 deveria retornar 1", () => {
    const resultado = calculadora.dividir(1, 1);
    expect(resultado).toBe(1);
})

test("Dividir 0 / 0 deveria retornar 0", () => {
    const resultado = calculadora.dividir(0, 0);
    expect(resultado).toBe(NaN);
})