//Exercise4

//const bill = 275;
const bill = 40;
//const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);