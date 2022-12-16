'use strict'

import { onClick } from '../tool.js';

const samples = [];
samples["for-of"] = {
  page: "sample.html",
  script: "for-of.js",
  title: 'Part 14 - For of loop'
}; 
samples["optional-chaining"] = {
  page: "sample.html",
  script: "optional-chaining.js",
  title: 'Part 14 - Optional Chaining'
};
samples["looping-objs"] = {
  page: "sample.html",
  script: "looping-objs.js",
  title: 'Part 14 - Looping Objects'
};
samples["game-challenge2"] = {
  page: "sample.html",
  script: "game-challenge2.js",
  title: 'Part 14 - Coding Challenge Soccer #2'
};
samples["sets"] = {
  page: "sample.html",
  script: "sets.js",
  title: 'Part 14 - Sets'
};
samples["maps"] = {
  page: "sample.html",
  script: "maps.js",
  title: 'Part 14 - Maps'
};

window.samples = samples;
window.onClick = onClick;