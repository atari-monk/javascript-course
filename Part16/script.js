'use strict'

import { onClick } from '../tool.js';

const samples = [];
samples["x"] = {
  page: "sample.html",
  script: "x.js",
  title: 'Part 16 - X'
}; 

window.samples = samples;
window.onClick = onClick;