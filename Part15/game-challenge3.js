'use strict'

import { getPause, getCode, getWithNoComma } from '../tool.js';

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1. Create an array 'events' of the different game events that happened (no duplicates)
let content = `${getCode('events')}${getPause()}`;
const events = [...new Set(gameEvents.values())];
for (const event of events)
  content += `${event}, `;
content = getWithNoComma(content);
content += '<br><br>';

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair.So remove this event from the game events log.
gameEvents.delete(64);
content += `${getCode('delete 64, events')}${getPause()}`;
const events2 = [...new Set(gameEvents.values())];
for (const event of events2)
  content += `${event}, `;
content = getWithNoComma(content);
content += '<br><br>';

//3. Print the following string to the console: "An event happened, on average, every 9 minutes"(keep in mind that a game has 90 minutes)
const time = [...gameEvents.keys()].pop();
content += `An event happened, on average, every ${time / gameEvents.size} minutes`;
content += '<br><br>';

//4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF]17: ⚽️ GOAL
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  content += `[${half} HALF] ${min}: ${event}<br>`;
}
content = content;

const contentEl = document.getElementById('content');
contentEl.innerHTML = content;