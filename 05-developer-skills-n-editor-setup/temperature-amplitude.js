'use strict';

/* 
    PROBLEM 1:

    We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of the day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

    1) Understanding the problem
        - What is temperature amplitude?
            Answer: difference between highest and lowest temperatures
        - How to compute max and min temperatures?
        - What is a sensor error? And what to do?
    2) Breaking up into sub-problems
        - How to ignore errors?
        - Find max value in temperatures array
        - Find min value in temperatures array
        - Substract min from max (amplitude) and return it.

*/
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, 'Max:', max, 'Min:', min);
  return max - min;
};

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const amplitude = calcTempAmplitude(temperatures);

console.log('Amplitude:', amplitude);

/*
    PROBLEM 2:

    The function should now receive 2 arrays of temperatures

    1) Understanding the problem
        - With 2 arrays, should we implement functionality twice?
            No! Just merge the two arrays
            
    2) Breaking up into sub-problems
        - Merge 2 arrays?        
*/

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, 'Max:', max, 'Min:', min);
  return max - min;
};

const t1 = [3, -2, -6, -1, 'error', 9];
const t2 = [13, 27, 15, 14, 9, 5];

const amplitudeNew = calcTempAmplitudeNew(t1, t2);

console.log('AmplitudeNew:', amplitudeNew);
