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
    fri: { open: 0, close: 24 },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log('** Destructuring an object **\n*****************************');
const { name, openingHours, categories, rating } = restaurant;
console.log('Name:', name);
console.log('Opening hours:', openingHours);
console.log('Categories:', categories);

// destructuring without and with default values,
// menu does not have a default value, starters does:
console.log(
  '** Destructuring an object without and with default values **\n*************************************************************'
);
const { menu, startMenu: starters = [] } = restaurant;

console.log('Menu:', menu);
console.log('Start menu:', starters);

// destructuring into variables with different names:
console.log(
  '** Destructuring into variables with different names **\n*******************************************************'
);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
  rating: classification,
} = restaurant;

console.log('Name 2:', restaurantName);
console.log('Opening hours 2:', hours);
console.log('Categories 2:', tags);
console.log('Classification 2:', tags);
