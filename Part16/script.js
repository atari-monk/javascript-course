'use strict'

import { onClick } from '../tool.js';

const samples = [];
samples["default-parameters"] = {
  page: "sample.html",
  script: "default-parameters.js",
  title: 'Part 16 - Default Parameters'
}; 
samples["value-ref"] = {
  page: "sample.html",
  script: "value-ref.js",
  title: 'Part 16 - How Passing Arguments Works: Values vs. Reference'
}; 
samples["func-as-arg"] = {
  page: "sample.html",
  script: "func-as-arg.js",
  title: 'Part 16 - Functions accepting callback functions'
}; 

window.samples = samples;
window.onClick = onClick;