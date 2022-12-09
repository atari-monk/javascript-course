//Exercise10

'use strict;'

const mesureKelvin = function() {
  const mesurement = {
    type: 'temp',
    unit: 'celsius',
    //C) Fix, this was bug
    //value: prompt('Degrees celcius:')
    value: Number(prompt('Degrees celcius:'))
  };

  //B) Find, bug was that value was a string
  console.table(mesurement);
  
  const kelvin = mesurement.value + 273;
  return kelvin;
}

//A) Identify
console.log(mesureKelvin());