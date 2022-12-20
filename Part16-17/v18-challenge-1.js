'use strict'

console.log('Vid 18, Challenge-1, dogs age');  

function checkDogs(dogsJulia, dogsKate) {
  const dogsJuliaFix = dogsJulia.slice();
  dogsJuliaFix.splice(0 , 1);
  dogsJuliaFix.splice(-2);
  const dogs = [...dogsJuliaFix, ...dogsKate];
  dogs.forEach((dog, i) => {
    if(dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

console.log('set1');
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('set2');
checkDogs([9, 16, 6, 8, 3], [10, 5 ,6 ,1, 4]);
