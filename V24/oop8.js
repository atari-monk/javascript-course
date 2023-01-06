'use strict'

import { Person } from "./oop4-mod.js";

// Inheritance Between "Classes": ES6 Classes

class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear
      } years old, but as a student I feel more like ${2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new Student('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
console.dir(martha);