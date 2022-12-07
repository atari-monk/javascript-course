//Exercise1

const massMark = 78;//kg
const heightMark = 1.69;//m
const massJohn = 92;//kg
const heightJohn = 1.95;//m

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);