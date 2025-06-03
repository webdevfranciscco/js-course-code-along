'use strict';

const measurementKelvin = function () {
  const measurementCelsius = {
    type: 'temperature',
    unit: 'celsius',
    value: prompt('Enter temperature in Celsius degrees:'),
  };

  const kelvin = measurementCelsius.value + 273;
  return kelvin;
};

console.log(measurementKelvin());
