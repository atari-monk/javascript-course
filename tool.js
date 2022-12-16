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

const encodeGetParams = (p) =>
  Object.entries(p)
    .map((kv) => kv.map(encodeURIComponent).join("="))
    .join("&");

function onClick(sample) {
  const params = {
    none: '',
    script: sample.script,
    title: sample.title
  };
  const url = sample.page + '?' + encodeGetParams(params);
  window.open(url, '_blank');
}

export { getWithNoComma, getPause, getCode, onClick };