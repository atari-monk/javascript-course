'use strict'
 
console.log('Arrays');

let arr = ['a', 'b', 'c', 'd', 'e'];

//doesnt mutate original array, returns new
console.log('slice');
console.log(arr.slice(2));
console.log('original ' + arr);
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(2, -2));
console.log('shalow copy');
console.log(arr.slice());
console.log([...arr]);

//mutates original array
console.log('splice');
console.log(arr.splice(2));
console.log('original ' + arr);
console.log('remove ' + arr.splice(-1));
console.log('original ' + arr);
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(1, 2));
console.log('original ' + arr);

//reverse (mutate)
let arr2 = ['c', 'b', 'a'];
console.log(arr2.reverse());

//concat (not mutate)
arr = ['a', 'b', 'c', 'd', 'e'];
arr2 = ['c', 'b', 'a'];
console.log(arr2.concat(arr));
console.log([...arr, ...arr2]);

//join
console.log(arr.join('-'));

//at
const arr3 = [23, 12, 34];
console.log(arr3[0]);
console.log(arr3.at(0));

//getting last element
console.log(arr3[arr3.length-1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log('string with at'.at(0));