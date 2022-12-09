//Exercise11

'use strict;'

const arr = [17, 21, 23];

function printForecast(arr) {
  let text = '';
  for (let i = 0; i < arr.length; i++) {
    text += `${arr[i]}C in ${i + 1} days ... `;
  }
  return '... ' + text;
}

console.log(printForecast(arr));