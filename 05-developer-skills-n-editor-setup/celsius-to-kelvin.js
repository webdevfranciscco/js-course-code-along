'use strict';

const measurementKelvin = function () {
  const measurementCelsius = {
    type: 'temperature',
    unit: 'celsius',
    // 3. This is where this has been fixed
    // value: prompt('Enter temperature in Celsius degrees:')
    // was changed to:
    value: Number(prompt('Enter temperature in Celsius degrees:')),
  };

  // 2. Find: this logs the measurementCelsius object, where it can be seen that
  // measurementCelsius.value is a string, not a number as expected
  // the error results from a type coercion of 273 into a string, followed by a concatenation (hence the 10273 result)
  console.log(measurementCelsius);

  const kelvin = measurementCelsius.value + 273;
  return kelvin;
};

// 1. Identify: this comand logs 10273 instead of the expected 283.
console.log(measurementKelvin());
