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

// mutating variables

console.log('** two individually defined variables ** ');
console.log('**************************************** ');

let a = 111;
let b = 99;

console.log('a:', a, 'b:', b);

console.log('** an object ** ');
console.log('*************** ');

const obj = { a: 23, b: 7, c: 14 };

console.log('obj:', obj);
console.log('obj.a:', obj.a, 'obj.b:', obj.b, 'obj.c:', obj.c);

console.log(
  '** the object destructured into preexisting variables a and b ** '
);
console.log(
  '**************************************************************** '
);

({ a, b } = obj);

console.log('a:', a, 'b:', b);
