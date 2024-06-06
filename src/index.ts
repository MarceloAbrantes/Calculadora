const { MockCalculator } = require('./MockCalculator');

const calculator = new MockCalculator();

console.log('Add:', calculator.add(2, 3));        // Output: 15
console.log('Subtract:', calculator.subtract(5, 3)); // Output: -8
console.log('Multiply:', calculator.multiply(2, 3)); // Output: 60
console.log('Divide:', calculator.divide(10, 2));    // Output: 15

