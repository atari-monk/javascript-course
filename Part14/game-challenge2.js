'use strict'

import { game } from './game.js';
import { getPause, getCode, getWithNoComma } from '../tool.js';

//1. Loop over the game.scored array and print each player name to the console, along with the goal number(Example: "Goal 1: Lewandowski")
let content = `${getCode('1. Goals')}${getPause()}`;
for (const [i, name] of game.scored.entries())
  content += `Goal ${i+1}: ${name}, `;
content = getWithNoComma(content);
content += '<br>'

//2. Use a loop to calculate the average odd and log it to the console
content += `<br>${getCode('2. Average')}${getPause()}`;
let avg = 0;
const odds = Object.values(game.odds);
for (const odd of odds)
  avg += odd;
avg /= odds.length;
content += `${avg.toFixed(3)}`;
content += '<br>'

/*
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").
*/
content += `<br>${getCode('3. Print')}${getPause()}`;
for (const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw:' : `victory ${game[team]}:`;
  content += `Odd of ${teamStr} ${odd}<br>`;
}

/*
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/
content += `<br>${getCode('4. Bonus')}${getPause()}`;
let scorers = {};
for (const name of game.scored) {
  scorers[name] ? scorers[name]++ : scorers[name] = 1;
}
for (const [name, score] of Object.entries(scorers))
  content += `${name}: ${score}, `;
content += '<br>'

const contentEl = document.getElementById('content');
contentEl.innerHTML = content;