'use strict'

// Selecting, Creating, and Deleting Elements

// Selecting elements
console.log('entire page:');
console.log(document.documentElement);
console.log('head:');
console.log(document.head);
console.log('body:');
console.log(document.body);

console.log('selector:');
const header = document.querySelector('.header');
console.log(header);
console.log('multiple by selector:');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log('by id:');
const section1 = document.getElementById('section--1');
console.log(section1);
console.log('multiple by type (Html Collection (live) updates, NodeList not):');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log('by className:');
const btns = document.getElementsByClassName('btn');
console.log(btns);

// Creating and inserting elements
// .insertAdjecentHtml (Bankist)
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //message.parentElement.removeChild(message);
  });