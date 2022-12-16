'use strict'

import {restaurant} from './restaurant.js';
import { getWithNoComma, getPause, getCode } from '../tool.js';

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

let content = `${getCode('for (const item of menu)')}${getPause()}`;
for (const item of menu) 
  content += `${item}, `;
content = getWithNoComma(content);

content += `<br>${getCode('for (const [i, el] of menu.entries())')}${getPause()}`;
for (const [i, el] of menu.entries()) {
  content += ` ${i + 1}: ${el}`;
}

content += `<br>${getCode('menu.entries().next().value')}${getPause()}`;
content += menu.entries().next().value;

content += `<br>${getCode('[...menu.entries()]')}${getPause()}`;
content += [...menu.entries()];

const contentEl = document.getElementById('content');
contentEl.innerHTML = content;