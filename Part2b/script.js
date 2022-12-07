//Exercise3

const scoreDolphins = 100//(96 + 108 + 89) / 3;
const scoreKoalas = 100//(88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins won ${scoreDolphins}/${scoreKoalas}.`)
}
else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log(`Koalas won ${scoreKoalas}/${scoreDolphins}.`)
}
else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log(`Draw at ${scoreDolphins} score.`)
} else {
  console.log(`No team wins, since they didnt reach 100 points, ${scoreKoalas}/${scoreDolphins}.`)
}