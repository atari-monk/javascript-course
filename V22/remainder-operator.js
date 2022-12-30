'use strict'

import { movements } from '../Data/s2Data.js'

// The Remainder Operator
console.log('The Remainder Operator');
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log('-');
console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log('-');
console.log(6 % 2);
console.log(6 / 2);

console.log('-');
console.log(7 % 2);
console.log(7 / 2);

console.log('isEven');
const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

console.log('Click on Content');
const content = document.getElementById('content');
const title = document.getElementById('title');
content.addEventListener('click', function () {
  movements.forEach(function (_, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) content.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) title.style.backgroundColor = 'blue';
  });
});