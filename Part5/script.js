//Exercise7

'use strict;'

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
  getInfo: function() {
    this.info = `${this.fullName}'s BMI (${this.bmi})`;
    return this.info;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
  getInfo: function () {
    this.info = `${this.fullName}'s BMI (${this.bmi})`;
    return this.info;
  }
};

john.calcBMI();
mark.calcBMI();
john.getInfo();
mark.getInfo();
if (john.bmi > mark.bmi) {
  console.log(`${john.info} is higher than ${mark.info}.`);
} else if (mark.bmi > john.bmi) {
  console.log(`${mark.info}) is higher than ${john.info}.`);
} else console.log(`${mark.info}) equals ${john.info}.`);