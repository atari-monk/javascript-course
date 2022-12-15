'use strict'

import { restaurant, weekdays } from './restaurant.js';
import { getPause, getCode } from './tool.js';

//Problem of undefined exceptions when not checked in if's like this
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
let content = `${getCode('restaurant.openingHours?.mon?.open;')}${getPause()}`;
content += restaurant.openingHours?.mon?.open;

// Example
content += `<br>Example${getPause()}`;
for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  content += open === 'closed' ? `On ${day} it's closed. ` : `On ${day}, we open at ${open}. `;
}

// Methods
content += `<br>${getCode("restaurant.order?.(0, 1) ?? 'Method does not exist';")}${getPause()}`;
content += restaurant.order?.(0, 1) ?? 'Method does not exist';
content += `<br>${getCode("restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist';")}${getPause()}`;
content += restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist';

// Arrays
content += `<br>${getCode("users[0]?.name ?? 'User array empty';")}${getPause()}`;
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
content += users[0]?.name ?? 'User array empty';
const users2 = [];
content += `<br>${getCode("users2[0]?.name ?? 'User array empty';")}${getPause()}`;
content += users2[0]?.name ?? 'User array empty';

const contentEl = document.getElementById('content');
contentEl.innerHTML = content;