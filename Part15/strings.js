'use strict'

import { getPause, getCode } from '../tool.js';

let content = `${getCode('string []')}${getPause()}<br>`;
const airline = 'TAP Air Portugal';
const plane = 'A320';
content += `1. ${plane[0]}<br>`;
content += `2. ${plane[1]}<br>`;
content += `3. ${plane[2]}<br>`;
content += `4. ${'B737'[0]}`;
content += '<br>';

content += `${getCode('string methods')}${getPause()}<br>`;
content += `1. ${airline.length}, ${'B737'.length}<br>`;
content += `2. ${airline.indexOf('r')}<br>`;
content += `3. ${airline.lastIndexOf('r') }<br>`;
content += `4. ${airline.indexOf('Portugal')}<br>`;
content += `5. ${airline.indexOf('portugal') }<br>`;
content += `6. ${airline.slice(4)}<br>`;
content += `7. ${airline.slice(4, 7)}<br>`;
content += `8. ${airline.slice(0, airline.indexOf(' '))}<br>`;
content += `9. ${airline.slice(airline.lastIndexOf(' ') + 1)}<br>`;
content += `10. ${airline.slice(-2)}<br>`;
content += `11. ${airline.slice(1, -1) }<br>`;
//content += `${}<br>`;

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') 
    content += 'You got the middle seat 😬<br>';  
  else content += 'You got lucky 😎<br>';
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

content += `12. ${airline.toLowerCase()}<br>`;
content += `13. ${airline.toUpperCase()}<br>`;

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
content += `14. ${passengerCorrect}<br>`;

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const normalizedEmail = loginEmail.toLowerCase().trim();
content += `15. ${normalizedEmail}<br>`;
content += `16. ${email === normalizedEmail}<br>`;

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

const contentEl = document.getElementById('content');
contentEl.innerHTML = content;