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
samples["func-as-out"] = {
  page: "sample.html",
  script: "func-as-out.js",
  title: 'Part 16 - Functions returning functions'
}; 
samples["call-and-apply"] = {
  page: "sample.html",
  script: "call-and-apply.js",
  title: 'Part 16 - The Call and Apply Methods'
}; 
samples["bind-method"] = {
  page: "sample.html",
  script: "bind-method.js",
  title: 'Part 16 - The bind Method'
}; 
samples["challenge-1"] = {
  page: "sample.html",
  script: "challenge-1.js",
  title: 'Vid 17 - Challenge-1'
}; 
samples["iife"] = {
  page: "sample.html",
  script: "iife.js",
  title: 'Vid 17 - Immediately Invoked Function Expressions (IIFE)'
}; 
samples["closures"] = {
  page: "sample.html",
  script: "closures.js",
  title: 'Vid 17 - Closures'
}; 
samples["arrays"] = {
  page: "sample.html",
  script: "arrays.js",
  title: 'Vid 18 - Arrays'
}; 
samples["arrays-foreach"] = {
  page: "sample2.html",
  script: "arrays-foreach.js",
  title: 'Vid 18 - Arrays ForEach'
}; 
samples["map-set-foreach"] = {
  page: "sample2.html",
  script: "map-set-foreach.js",
  title: 'Vid 18 - Map, Set ForEach'
}; 
samples["v18-challenge-1"] = {
  page: "sample2.html",
  script: "v18-challenge-1.js",
  title: 'Vid 18, Challenge-1'
}; 
samples["map-method"] = {
  page: "sample2.html",
  script: "map-method.js",
  title: 'Vid 18, Map Method'
};
samples["filter-method"] = {
  page: "sample2.html",
  script: "filter-method.js",
  title: 'Vid 18, Filter Method'
};
samples["reduce-method"] = {
  page: "sample2.html",
  script: "reduce-method.js",
  title: 'Vid 19, Reduce Method'
};
samples["v19-challenge-1"] = {
  page: "sample2.html",
  script: "v19-challenge-1.js",
  title: 'Vid 19, Challenge 1'
};
samples["chaining-methods"] = {
  page: "sample2.html",
  script: "chaining-methods.js",
  title: 'Vid 19, Chaining Methods'
};
samples["v19-challenge-2"] = {
  page: "sample2.html",
  script: "v19-challenge-2.js",
  title: 'Vid 19, Challenge 2'
};
samples["find-method"] = {
  page: "sample2.html",
  script: "find-method.js",
  title: 'Vid 19, Find Method'
};

window.samples = samples;
window.onClick = onClick;