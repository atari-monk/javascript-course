'use strict'

function getWithNoComma(str) {
  let text = str.trim();
  text = text.endsWith(',') ? text.slice(0, -1) : text;
  return text;
}

function getPause() {
  return '&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp';
}

function getCode(text) {
  return `<code>${text}</code>`;
}

export { getWithNoComma, getPause, getCode };