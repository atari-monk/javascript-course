'use strict'

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

const encodeGetParams = (p) =>
  Object.entries(p)
    .map((kv) => kv.map(encodeURIComponent).join("="))
    .join("&");

function onClick(id) {
  var sample = samples[id];
  const params = {
    none: '',
    script: sample.script,
    title: sample.title
  };
  const url = sample.page + '?' + encodeGetParams(params);
  window.open(url, '_blank');
}