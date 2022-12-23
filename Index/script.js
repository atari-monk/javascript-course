'use strict'

import { onClick } from './tool.js';
import { vid16 } from './dataV16.js';
import { vid17 } from './dataV17.js';
import { vid18 } from './dataV18.js';
import { vid19 } from './dataV19.js';
import { vid20 } from './dataV20.js';
import { vid21 } from './dataV21.js';

window.vid16 = vid16;
window.vid17 = vid17;
window.vid18 = vid18;
window.vid19 = vid19;
window.vid20 = vid20;
window.vid21 = vid21;
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
Object.keys(vid20).forEach((key) => {
  setTitle(getById(key), vid20[key]);
});
Object.keys(vid21).forEach((key) => {
  setTitle(getById(key), vid21[key]);
});