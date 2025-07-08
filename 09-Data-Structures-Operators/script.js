'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
