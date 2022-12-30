'use strict'

// Math and Rounding
console.log('root:');
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log('max:');
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log('min:');
console.log(Math.min(5, 18, 23, 11, 2));

console.log('PI:');
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log('random:');
console.log(Math.trunc(Math.random() * 6) + 1);

console.log('random formula:');
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;
// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(10, 20));

console.log('Rounding integers:');
// Rounding integers
console.log('round:');
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log('ceil:');
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log('floor:');
console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log('trunc:');
console.log(Math.trunc(23.3));
console.log(Math.trunc(-23.3));
console.log('floor:');
console.log(Math.floor(-23.3));

console.log('toFixed:');
// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));