/*
    JavaScript Fundamentals – Part 1
    Coding Challenge #1
    Mark and John are trying to compare their BMI (Body Mass Index), which is
    calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg
    and height in meter).
    Your tasks:
    1. 2. 3. Store Mark's and John's mass and height in variables
    Calculate both their BMIs using the formula (you can even implement both
    versions)
    Create a Boolean variable 'markHigherBMI' containing information about
    whether Mark has a higher BMI than John.
    Test data:
    § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
    m tall.
    § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
    m tall.
*/

// Weight in kilograms

const weightMark = 95; // test data: 78 and 95
const weightJohn = 85; // test data 95 and 85

// Height in meters

const heightMark = 1.95; // test data: 1.69 and 1.95
const heightJohn = 1.76; // test data: 1.88 and 1.76

// Body Mass Index, method 1

const bmiMarkMethod1 = weightMark / heightMark ** 2;
const bmiJohnMethod1 = weightJohn / heightJohn ** 2;

let markHigherBMI = bmiMarkMethod1 > bmiJohnMethod1;

console.log('BMI Method 1  [ mass / weight^2 ]');
console.log('BMI Mark:', bmiMarkMethod1);
console.log('BMI John:', bmiJohnMethod1);
console.log('Is Mark\'s BMI higher than John\'s?', markHigherBMI);

// Body mass index, method 2

bmiMarkMethod2 = weightMark / (heightMark * heightMark);
bmiJohnMethod2 = weightJohn / (heightJohn * heightJohn);

markHigherBMI = bmiMarkMethod2 > bmiJohnMethod2;

console.log('BMI Method 2  [ mass / ( height * height ) ]')
console.log('BMI Mark:', bmiMarkMethod2);
console.log('BMI John:', bmiJohnMethod2);
console.log('Is Mark\'s BMI higher than John\'s?', markHigherBMI);
