//Exercise2

const massMark = 78;//kg
const heightMark = 1.69;//m
const massJohn = 92;//kg
const heightJohn = 1.95;//m

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
  console.log(`Mark's (${bmiMark}) BMI is higher than Jhon's (${bmiJohn})!`);
}
else {
  console.log(`Jhon's (${bmiJohn}) BMI is higher than Mark's (${bmiMark})!`);
}