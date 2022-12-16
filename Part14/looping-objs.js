'use strict'

import { openingHours } from './restaurant.js';
import { getPause, getCode } from '../tool.js';

let content = `${getCode('Object.keys(openingHours);')}${getPause()}`;
const properties = Object.keys(openingHours);
content += properties;
content += '<br>';

content += `<br>${getCode('Example')}${getPause()}`;
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
content += openStr;
content += '<br>';

content += `<br>${getCode('Object.values(openingHours);')}${getPause()}`;
const values = Object.values(openingHours);
content += values;
content += '<br>';

content += `<br>${getCode('Object.entries(openingHours);')}${getPause()}`;
const entries = Object.entries(openingHours);
content += entries;
content += '<br>';

content += `<br>${getCode('for (const [day, { open, close }] of entries)')}${getPause()}<br>`;
for (const [day, { open, close }] of entries) {
  content +=`On ${day} we open at ${open} and close at ${close}. `;
}
content += '<br>';

const contentEl = document.getElementById('content');
contentEl.innerHTML = content;