//Exercise6

'use strict;'

function calcTip1(bill){
  return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2; }

const calcTip2 = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

const calcTip3 = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

const bills = [125, 555, 44];
const tips1 = [calcTip1(bills[0]), calcTip1(bills[1]), calcTip1(bills[2])];
const tips2 = [calcTip2(bills[0]), calcTip2(bills[1]), calcTip2(bills[2])];
const tips3 = [calcTip3(bills[0]), calcTip3(bills[1]), calcTip3(bills[2])];
const total = [bills[0] + tips1[0], bills[1] + tips1[1], bills[2] + tips1[2]];

console.log(bills);
console.log(tips1);
console.log(tips2);
console.log(tips3);
console.log(total);