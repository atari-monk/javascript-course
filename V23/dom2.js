'use strict'

import { message } from './message.js'

// Styles, Attributes and Classes

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//this work only for inline style that was set the same way
console.log(message.style.color);
console.log(message.style.backgroundColor);

//to get style from css
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 80 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

console.log('Attributes:');
// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

//set
logo.alt = 'Beautiful minimalist logo';

console.log('Non-standard:');
// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log('Src:');
//absolute
console.log(logo.src);
//relative
console.log(logo.getAttribute('src'));

console.log('Src2:');
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes like in arrays

// Don't use
logo.clasName = 'jonas';