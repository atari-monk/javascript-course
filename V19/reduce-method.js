'use strict'

import { logVar } from "../tool.js";
import { movements } from "./data.js"

// The reduce Method
logVar({movements});

// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
logVar({balance});

const balance2 = movements.reduce((acc, cur) => acc + cur, 0);
logVar({balance2});

let balance3 = 0;
for (const mov of movements) balance3 += mov;
logVar({balance3});

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
logVar({max});

const max2 = movements.reduce((acc, mov) => 
  acc > mov ? acc : mov, movements[0]);
logVar({max2});
