'use strict'

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

export { Person, jonas, matilda, jack }