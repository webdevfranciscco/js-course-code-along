'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];

// destructuring.- The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// manually destructuring the "arr" array into 3 variables:
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log('a:', a, 'b:', b, 'c:', c);
console.log('arr:', arr);

// destructuring the "arr" array into 3 variables
// by using a JavaScript syntax expression:
const [x, y, z] = arr;
console.log('x:', x, 'y:', y, 'z:', z);

const [first, second] = restaurant.categories;
console.log('first:', first, 'second:', second);
// console output: first: Italian second: Pizzeria

let [_first, , _third] = restaurant.categories;
console.log('first:', _first, 'third:', _third);
// console output: first: Italian third: Vegetarian

// swapping values manually
/*
let temp = _first;
_first = _third;
_third = temp;
console.log('first:', _first, 'third:', _third);
// console output: first: Vegetarian third: Italian
*/

// swapping by using destructuring
[_first, , _third] = [_third, , _first];
console.log('first:', _first, 'third:', _third);
// console output: first: Vegetarian third: Italian

/*
console.log(restaurant.order(2, 0));
// console output:
//    (2) ['Garlic Bread', 'Pizza']
//        0: "Garlic Bread"
//        1: "Pizza"
//        length: 2
//        [[Prototype]]: Array(0)
*/

// destructure the array returned by the function order()
const [starter, mainCourse] = restaurant.order(2, 0);
console.log('Starter:', starter, '/ Main course:', mainCourse);

// getting a nested array using destructuring
const nested = [2, 4, [5, 6]];
const [i, , k] = nested;
console.log('Get the first and third element (a nested array):', i, k);

// destructuring inside destructuring
const [l, , [m, n]] = nested;
console.log('Individual destructured elements:', l, m, n);

// destructuring beyond array's length
const [p, q, r] = [8, 9];
console.log('This tries to pull an element that does not exist:', p, q, r);

// default values
const [f = -1, g = -1, h = -1] = [8, 9];
console.log(
  'This provides a -1 default value for all elements if they do not exist:',
  f,
  g,
  h
);
