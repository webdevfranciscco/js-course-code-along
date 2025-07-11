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
};

// THE SPREAD OPERATOR
// CAN ONLY BE USED IN PLACES WHERE WE WOULD OTHERWISE
// WRITE VALUES SEPARATED BY COMMAS

const arr = [7, 8, 9];

// task: add 1 and 2 as the first and second elements on arr[]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // manually built
console.log('badExtendedNewArray:', badNewArr);

// using the spread operator
const newArr = [1, 2, ...arr];
console.log('extendedNewArray:', newArr);

// log each element individually:
console.log('...newArr:', ...newArr);

// add elements to the end of an array:
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log('newMenu:', newMenu);

// Create shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log('mainMenuCopy:', mainMenuCopy);

// Mege two arrays together
const menusMerge = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log('menusMerge:', menusMerge);

// THE SPREAD OPERATOR CAN BE USED IN ALL IERABLES
// ITERABLES ARE: ARRAYS, STRINGS, MAPS AND SETS
// objects ARE NOT iterables

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];

console.log('Message:', letters);

console.log('str:', str);
console.log('...str:', ...str);

// MULTIPLE COMMA-SEPARATED VALUES ARA ONLY EXPECTED AS PARAMETERS/ARGUMENTS IN A FUNCTION
// OR IN AN ARRAY
