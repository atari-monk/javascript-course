'use strict'

import { onClick } from '../tool.js';

const samples = [];
samples["default-parameters"] = {
  page: "sample.html",
  script: "default-parameters.js",
  title: 'Part 16 - Default Parameters'
}; 

window.samples = samples;
window.onClick = onClick;