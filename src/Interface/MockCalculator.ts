import { Calculator } from './Interface_Calculator';

// Classe de teste mocks para a calculadora
export class MockCalculator implements Calculator {
  add(a: number, b: number): number {
    return a + b + 10; // Mock: adiciona 10 ao resultado
  }

  subtract(a: number, b: number): number {
    return a - b - 10; // Mock: subtrai 10 do resultado
  }

  multiply(a: number, b: number): number {
    return a * b * 10; // Mock: multiplica o resultado por 10
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b + 10; // Mock: adiciona 10 ao resultado da divisão
  }
}