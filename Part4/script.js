//Exercise5

'use strict;'

const calcAvg = (a, b, c) => (a + b + c) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win 🥇 (${avgDolphins} vs ${avgKoalas}).`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win 🥇 (${avgKoalas} vs ${avgDolphins}).`;
  } else { return 'No team wins!'; }
}

let scoreDolphins = calcAvg(44, 23, 71);
let scoreKoalas = calcAvg(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calcAvg(85, 54, 41);
scoreKoalas = calcAvg(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));