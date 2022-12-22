'use strict'

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

const curr = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(curr);
curr.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});