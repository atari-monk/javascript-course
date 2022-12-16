'use strict'

import { getWithNoComma, getPause, getCode } from '../tool.js';

let content = `${getCode('Set')}${getPause()}`;
const orders = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
for (const el of orders)
  content += `${el}, `;
content = getWithNoComma(content);
content += '<br><br>';

content += `${getCode('Set')}${getPause()}`;
const strSet = new Set('string');
for (const el of strSet)
  content += `${el}, `;
content = getWithNoComma(content);
content += '<br><br>';

content += `${getCode('Set Methods:')}<br><br>`;

content += `${getCode('orders.size;')}${getPause()}`;
content += `${orders.size}<br><br>`;

content += `${getCode("orders.has('Pizza')")}${getPause()}`;
content += `${orders.has('Pizza')}<br><br>`;

content += `${getCode("orders.add('Garlic Bread')")}${getPause()}`;
orders.add('Garlic Bread');
orders.add('Garlic Bread');
for (const el of orders)
  content += `${el}, `;
content = getWithNoComma(content);
content += '<br><br>';

content += `${getCode("orders.delete('Risotto')")}${getPause()}`;
orders.delete('Risotto');
for (const el of orders)
  content += `${el}, `;
content = getWithNoComma(content);
content += '<br><br>';

content += `${getCode("orders.clear()")}${getPause()}`;
orders.clear();
content += 'size=';
content += `${orders.size}<br><br>`;

content += `${getCode("staff")}${getPause()}`;
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
for (const el of staff)
  content += `${el}, `;
content = getWithNoComma(content);
content += '<br><br>';

content += `${getCode("staffUnique = [...new Set(staff)]")}${getPause()}`;
const staffUnique = [...new Set(staff)];
for (const el of staffUnique)
  content += `${el}, `;
content = getWithNoComma(content);
content += '<br><br>';

content += `${getCode("new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size")}${getPause()}`;
const size = new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size;
content += `${size}`;
content += '<br><br>';

content += `${getCode("new Set(['jonasschmedtmann']).size")}${getPause()}`;
const size2 = new Set('jonasschmedtmann').size;
content += `${size2}`;

const contentEl = document.getElementById('content');
contentEl.innerHTML = content;