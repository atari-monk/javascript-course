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

//data set 2
const massMark2 = 95;//kg
const heightMark2 = 1.88;//m
const massJohn2 = 85;//kg
const heightJohn2 = 1.76;//m

const bmiMark12 = massMark2 / heightMark2 ** 2;
const bmiMark22 = massMark2 / (heightMark2 * heightMark2);

if (bmiMark12 == bmiMark22) console.log("Mark BMI calculated to be: " + bmiMark12);
else console.log("Error in calculating Mark's BMI!")

const bmiJohn12 = massJohn2 / heightJohn2 ** 2;
const bmiJohn22 = massJohn2 / (heightJohn2 * heightJohn2);

if (bmiJohn12 == bmiJohn22) console.log("Jhon BMI calculated to be: " + bmiJohn12);
else console.log("Error in calculating Jhon's BMI!")

const markHigherBMI2 = bmiMark12 > bmiJohn12;

if (!markHigherBMI2) console.log("Jhon has higher BMI that Mark.");