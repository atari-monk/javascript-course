'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// The reduce Method
console.log(movements);

// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

const balance2 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance2);

let balance3 = 0;
for (const mov of movements) balance3 += mov;
console.log(balance3);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

const max2 = movements.reduce((acc, mov) => 
  acc > mov ? acc : mov, movements[0]);
console.log(max2);
