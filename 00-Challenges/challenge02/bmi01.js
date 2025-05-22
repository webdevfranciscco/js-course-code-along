/*
    Coding Challenge #2

    Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

    Your tasks:

    1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

    2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

    Hint: Use an if/else statement 
*/

// Weight in kilograms

const weightMark = 95; // test data: 78 and 95
const weightJohn = 85; // test data 95 and 85

// Height in meters

const heightMark = 1.88; // test data: 1.69 and 1.88
const heightJohn = 1.76; // test data: 1.95 and 1.76

// Body Mass Index

bmiMark = weightMark / (heightMark * heightMark);
bmiJohn = weightJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI is greater than John's!`)
} else {
    console.log(`John's BMI is greater than Mark's!`)

    console.log(`Mark's BMI: ${bmiMark}`);
    console.log(`John's BMI: ${bmiJohn}`);
};

