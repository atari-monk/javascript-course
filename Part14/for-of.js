'use strict'

import {restaurant} from './restaurant.js';

const content1El = document.getElementById('content-1');
const content2El = document.getElementById('content-2');
const content3El = document.getElementById('content-3');

let content1 = '<strong>Full menu: </strong>';
let content2 = '<strong>Full menu: </strong>';
let content3 = '<strong>Full menu: </strong>';

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) 
  content1 += `${item}, `;

for (const [i, el] of menu.entries()) {
  content2 += ` ${i + 1}: ${el}`;
}

content1El.innerHTML = getWithNoComma(content1);
content2El.innerHTML = content2;
content3El.innerHTML = content3 + [...menu.entries()];

function getWithNoComma(str) {
  let text = str.trim();
  text = text.endsWith(',') ? text.slice(0, -1) : text;
  return text;
}