'use strict'

const movementsUI = Array.from(
  document.querySelectorAll('.movements__value'),
  el => Number(el.textContent.replace('€', '')));
console.log(movementsUI);

const movementsUI2 = [...document.querySelectorAll('.movements__value')];