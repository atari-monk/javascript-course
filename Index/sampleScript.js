'use strict'

var url = location.search;

const urlParams = new URLSearchParams(url);
const scriptFile = urlParams.get('script')
const title = urlParams.get('title')

document.title = title;

const titleEl = document.getElementById('title');
if(titleEl)
titleEl.textContent = title;

let script = document.createElement("script");
script.setAttribute("src", scriptFile);
script.setAttribute("type", "module");
document.body.appendChild(script);