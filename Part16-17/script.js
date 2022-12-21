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

//vid18
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
  title: 'Map, Set ForEach',
  vid: '18',
  start: '37',
  end: '42',
  time: '5'
}; 
samples["bankist-app-intro"] = {
  page: "../Bankist/index.html",
  script: "../Bankist/script.js",
  title: 'Bankist App Intro',
  vid: '18',
  start: '43',
  end: '53',
  time: '10'
}; 
samples["bankist-app-1"] = {
  page: "../Bankist/index.html",
  script: "../Bankist/script.js",
  title: 'Bankist App 1',
  vid: '18',
  start: '53',
  end: '1:11',
  time: '18'
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

//vid19
const vid19 = []; 
vid19["reduce-method"] = {
  page: "sample2.html",
  script: "../V19/reduce-method.js",
  title: 'Reduce Method',
  vid: '19',
  start: '0',
  end: '10',
  time: '10'
};
vid19["bankist-2"] = {
  page: "../Bankist/index.html",
  script: "../Bankist/script.js",
  title: 'Bankist App 2',
  vid: '19',
  start: '10',
  end: '14',
  time: '10'
};
vid19["reduce-method-2"] = {
  page: "sample2.html",
  script: "../V19/reduce-method.js",
  title: 'Reduce Method, Max',
  vid: '19',
  start: '14',
  end: '21',
  time: '7'
};
vid19["s2-challenge-2"] = {
  page: "sample2.html",
  script: "../V19/s2-challenge-2.js",
  title: 'Challenge #2',
  vid: '19',
  start: '21',
  end: '31',
  time: '10'
};
vid19["chaining-methods"] = {
  page: "sample2.html",
  script: "../V19/chaining-methods.js",
  title: 'Chaining Methods',
  vid: '19',
  start: '31',
  end: '39',
  time: '8'
};
vid19["bankist-3"] = {
  page: "../Bankist/index.html",
  script: "../Bankist/script.js",
  title: 'Bankist App 3',
  vid: '19',
  start: '39',
  end: 'x',
  time: 'x'
};
vid19["v19-challenge-2"] = {
  page: "sample2.html",
  script: "v19-challenge-2.js",
  title: 'Vid 19, Challenge 2'
};
vid19["find-method"] = {
  page: "sample2.html",
  script: "find-method.js",
  title: 'Vid 19, Find Method'
};

window.samples = samples;
window.vid19 = vid19;
window.onClick = onClick;

const getById = function (id) {
  return document.getElementById(id);
}

const setTitle = function (element, data) {
  element.innerText = `${data.title} (${data.start}-${data.end}/${data.time})`; 
}

const vid18Keys = [
  'map-set-foreach'
  ,'bankist-app-intro'
  , 'bankist-app-1'
];

vid18Keys.forEach((key)=>{
  setTitle(getById(key), samples[key]);
});

const vid19Keys = [
  'reduce-method',
  'bankist-2',
  'reduce-method-2',
  's2-challenge-2',
  'chaining-methods',
  'bankist-3'
];

console.log(Object.keys(vid19));

vid19Keys.forEach((key) => {
  setTitle(getById(key), vid19[key]);
});