//Exersice1

const massMark = 78;//kg
const heightMark = 1.69;//m
const massJohn = 92;//kg
const heightJohn = 1.95;//m

const bmiMark1 = massMark / heightMark ** 2;
const bmiMark2 = massMark / (heightMark * heightMark);

if (bmiMark1 == bmiMark2) console.log("Mark BMI calculated to be: " + bmiMark1);
else console.log("Error in calculating Mark's BMI!")

const bmiJohn1 = massJohn / heightJohn ** 2;
const bmiJohn2 = massJohn / (heightJohn * heightJohn);

if (bmiJohn1 == bmiJohn2) console.log("Jhon BMI calculated to be: " + bmiJohn1);
else console.log("Error in calculating Jhon's BMI!")

const markHigherBMI = bmiMark1 > bmiJohn1;

if (markHigherBMI) console.log("Mark has higher BMI that Jhon.");