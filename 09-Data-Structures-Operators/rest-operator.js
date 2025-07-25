'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1, // use = sign to set default value
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at  ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log('Main ingredient:', mainIngredient);
    console.log('Additional ingredients:', otherIngredients);
  },
};

// REST IN ARRAYS

// Spread when at the right hand side of =
const arr = [1, 2, ...[3, 4]];
console.log('arr:', arr);

// Rest when at the left hand side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log('a, b, others:', a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log('pizza, risotto, otherFood:', pizza, risotto, otherFood);

// REST MUST ALWAYS BE THE LAST ELEMENT IN AN ARRAY

// REST IN OBJECTS

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// REST as parameter in fnctions

const createArray = function (...numbers) {
  console.log('Array created with the given numbers:', numbers);
};

createArray(1);
createArray(1, 2);
createArray(1, 2, 3);
createArray(1, 2, 3, 4);
createArray(1, 2, 3, 4, 5);

// function that can receive any number of parameters

const add = function (...numbers) {
  // << pack the numbers received into an array with the REST operator
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

//
const x = [23, 5, 7];
add(...x); // << unpack the array into a set of numbers by spreading them and use them as an argument

// Real life example

restaurant.orderPizza('mushrooms');

restaurant.orderPizza('mushrooms', 'onion', 'olives', ' spinach');

// SPREAD is used where we would otherwise write VALUES separated by comma
// REST is used where we would otherwise write VARIABLE NAMES separated by comma
