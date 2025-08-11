'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [`day-${4 + 2}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  /*
  openingHours: openingHours, // old syntax
  */

  openingHours, // enhanced new syntax
  /*
  // old syntax
      order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  */

  // enhanced new syntax
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); // logs 11

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // logs noting

console.log(
  'Check monday open hours with conditional chaining:',
  restaurant.openingHours.mon?.open
); // logs undefined if mon does not exist and its value if it does exist

console.log(
  'Check opening hours AND monday open hours with conditional chaining: ',
  restaurant.openingHours?.mon?.open
); // logs undefined if mon does not exist and its value if it does exist

/*
    console.log(
    'Check monday open hours without conditional chaining',
    restaurant.openingHours.mon.open
    ); // launches an error
*/

// practical example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

console.log('with optional chaining operator');

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open;
  console.log(`On ${day}, we open at ${open}`);
}

console.log('with optional chaining operator AND nullish coalescing');

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// optional chaining for methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// optional chaining for arrays

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// const users = [];

console.log(users[0]?.name ?? 'User array empty');

// or, using traditional code:

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
