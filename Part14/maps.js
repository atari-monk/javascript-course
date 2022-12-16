'use strict'

import { openingHours } from './restaurant.js';
import { getPause, getCode, getWithNoComma } from '../tool.js';

let content = `${getCode('Map.set().set().set()')}${getPause()}can be chained since it returns map.<br>`;
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

content += `${getCode('Map, get')}${getPause()}`;
content += `${rest.get('name')}, `;
content += `${rest.get(true)}, `;
content += `${rest.get(1)}`;
content += '<br>';

content += `${getCode('Map, calculated get')}${getPause()}`;
const time = 8;
content += `${rest.get(time > rest.get('open') && time < rest.get('close'))}`;
content += '<br>';

content += `${getCode('Map, has')}${getPause()}`;
content += `${rest.has('categories')}`;
content += '<br>';

content += `${getCode('rest.delete(2); rest.has(2);')}${getPause()}`;
rest.delete(2);
content += `${rest.has(2)}`;
content += '<br>';

content += `${getCode('Map, size')}${getPause()}`;
content += `${rest.size}`;
content += '<br>';

const arr = [1, 2];
rest.set(arr, 'Test');
content += `${getCode('Map, get with array key')}${getPause()}`;
content += `${rest.get(arr)}`;
content += '<br>';

const obj = document.querySelector('h1');
rest.set(obj, 'Heading');
content += `${getCode('Map, get with object key')}${getPause()}`;
content += `${rest.get(obj)}`;
content += '<br>';

content += `${getCode('Map, clear')}${getPause()}`;
rest.clear();
content += `size=${rest.size}`
content += '<br>';

content += `${getCode('Alternative to set')}${getPause()}new Map([[key1,value1],...])`;
content += '<br>';
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

content += `Objects to Maps: ${getCode('new Map(Object.entries(openingHours)')}${getPause()}`;
const hoursMap = new Map(Object.entries(openingHours));
for (const [key, {open, close}] of hoursMap) {
  content += `${key}: open: ${open}, close: ${close}, `;
}
content = getWithNoComma(content);
content += '<br>';

content += `${getCode("Map, quiz")}${getPause()}`;
content += `${question.get('question')}`;
content += '<br>';
for (const [key, value] of question) {
  if (typeof key === 'number')
    content += `Answer ${key}: ${value}, `;
}
content = getWithNoComma(content);
content += '<br>';
const answer = 3;
content += question.get(question.get('correct') === answer);
content += '<br>';

content += `Maps to Array:${getPause()}${getCode('[...question]')}<br>`;
const mapToArray = [...question];

content += `${getCode("[...question.keys()]")}${getPause()}`;
content += [...question.keys()];
content += '<br>';
content += `${getCode("[...question.values()]")}${getPause()}`;
content += [...question.values()];

const contentEl = document.getElementById('content');
contentEl.innerHTML = content;