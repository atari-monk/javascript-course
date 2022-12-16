'use strict'

import { onClick } from '../tool.js';

const samples = [];
samples["game-challenge3"] = {
  page: "sample.html",
  script: "game-challenge3.js",
  title: 'Part 15 - Coding Challenge Soccer #3'
}; 
samples["strings"] = {
  page: "sample.html",
  script: "strings.js",
  title: 'Part 15 - Strings'
}; 

window.samples = samples;
window.onClick = onClick;