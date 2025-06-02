/*
    CHALLENGE #4
    
    Let's improve Steven's tip calculator even more, this time using loops!

    Your tasks:

    1. Create an array called bills containing all 10 test bill values.

    2. Create empty arrays for the tips and the totals (tips and totals)

    3. Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



    TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



    BONUS:

    Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

    1. First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

    2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

    3. Call the function with the totals array.
*/

'use strict';



// const bills = [10, 100, 1000, 10000, 5, 50, 500, 5000, 50000];

const calcTip = function (bill) {
    return (bill >= 50 && bill <= 300) ? bill * 15 / 100 : bill * 20 / 100;
}

console.log('tip calculator');

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i <= bills.length - 1; i++) {
    tips[i] = calcTip(bills[i]);

    totals[i] = bills[i] + tips[i];
}

console.log('Totals:', totals);


// ** averaging function  *******************

const array = [10, 10];
let sum = 0;

const calcAverage = function (arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i];
    }

    let average = sum / (arr.length);

    return average;
}

console.log('Bills average:', calcAverage(totals));


// Getting the following error from Udemy's test for the bonus challenge: The `calcAverage` function should calculate the average of numbers from passed array working on it