'use strict'

import { onClick } from './tool.js';
import { vid16 } from './dataV16.js';
import { vid17 } from './dataV17.js';
import { vid18 } from './dataV18.js';
import { vid19 } from './dataV19.js';

window.vid16 = vid16;
window.vid17 = vid17;
window.vid18 = vid18;
window.vid19 = vid19;
window.onClick = onClick;

const getById = function (id) {
  return document.getElementById(id);
}

const setTitle = function (element, data) {
  element.innerText = `${data.title} (${data.start}-${data.end}/${data.time})`; 
}

Object.keys(vid16).forEach((key) => {
  setTitle(getById(key), vid16[key]);
});
Object.keys(vid17).forEach((key) => {
  setTitle(getById(key), vid17[key]);
});
Object.keys(vid18).forEach((key) => {
  setTitle(getById(key), vid18[key]);
});
Object.keys(vid19).forEach((key) => {
  setTitle(getById(key), vid19[key]);
});