'use strict'

let areaEl = document.getElementById('area');
let btnEl = document.getElementById('btn');

btnEl.addEventListener('click', function () {
  const text = areaEl.value;
  const lines = text.split('\n');
  const converted = [];
  for (const [i, line] of lines.entries())
  {
    const [a, b] = line.trim().split('_');
    let conv = a.toLowerCase() + b[0].toUpperCase() + b.slice(1);
    conv = conv.padEnd(20,' ') + '✅'.repeat(i+1);
    converted.push(conv + '\n');
  }
  areaEl.value = '';
  for (const line of converted) {
    areaEl.value += line;
  }
});

//data
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

//output
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅