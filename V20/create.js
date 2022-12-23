'use strict'

import { logVar } from "../Index/tool.js"

// More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = new Array(1, 2, 3, 4, 5, 6, 7);
logVar({ arr2 });

// Emprty arrays + fill method
const x = new Array(7);
logVar({ x });
// console.log(x.map(() => 5)); dosent work
x.fill(1, 3, 5);
x.fill(1);
logVar({ x });

arr.fill(23, 2, 6);
logVar({ x });

// Array.from
const y = Array.from({ length: 7 }, () => 1);
logVar({ y });

const z = Array.from({ length: 7 }, (_, i) => i + 1);
logVar({ z });