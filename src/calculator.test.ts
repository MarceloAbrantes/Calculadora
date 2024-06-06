import { MockCalculator } from "./MockCalculator";

describe("MockCalculator Tests", () => {
    let calculator: MockCalculator;

    beforeEach(() => {
        // Criando uma instância da MockCalculator
        calculator = new MockCalculator();
    });

    test("teste de adição", () => {
        const result = calculator.add(7, 8);
        expect(result).toBe(25); // O resultado esperado é 15, pois a função add na MockCalculator adiciona 10 ao resultado
    });

    test("teste de subtração", () => {
        const result = calculator.subtract(8, 3);
        expect(result).toBe(-5); // O resultado esperado é -8, pois a função subtract na MockCalculator subtrai 10 do resultado
    });

    test("teste de multiplicação", () => {
        const result = calculator.multiply(2, 4);
        expect(result).toBe(80); // O resultado esperado é 60, pois a função multiply na MockCalculator multiplica o resultado por 10
    });

    test("teste de divisão", () => {
        const result = calculator.divide(10, 2);
        expect(result).toBe(15); // O resultado esperado é 15, pois a função divide na MockCalculator adiciona 10 ao resultado da divisão
    });

    test("divisão por zero teste", () => {
        expect(() => {
            calculator.divide(28, 0);
        }).toThrowError("Division by zero"); // Espera-se que a divisão por zero lance um erro
    });
});
