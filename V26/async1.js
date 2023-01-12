'use strict'

// Our First AJAX Call: XMLHttpRequest

//https://github.com/public-apis/public-apis
//ctr + F = REST Countries
//https://restcountries.com/

const countriesContainer = document.querySelector('.countries');

const outOfOrder = 'https://restcountries.eu/rest/v2/name/'
const wasInOrder = 'https://restcountries.com/v3.1/name/'

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `${wasInOrder}${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.flags['svg']);
    console.log(data.name['common']);
    console.log(data.region);
    console.log((+data.population / 1000000).toFixed(1));
    console.log(Object.entries(data.languages)[0][1]);
    console.log(Object.entries(data.currencies)[0][1]['name']);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags['svg']}" />
    <div class="country__data">
      <h3 class="country__name">${data.name['common']}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.entries(data.languages)[0][1]}</p>
      <p class="country__row"><span>💰</span>${Object.entries(data.currencies)[0][1]['name']}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
getCountryData('poland');