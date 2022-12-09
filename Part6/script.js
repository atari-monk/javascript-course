//Exercise8

'use strict;'

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(total);
console.log(calcAvg(bills));
console.log(calcAvg(tips));
console.log(calcAvg(total));

function calcAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}