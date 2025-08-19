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
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const ristorante = new Map();

ristorante.set('name', 'Classico Italiano');

ristorante.set(1, 'Firenze, Italy');

// the set method returns the updated map
console.log(ristorante.set(2, 'Lisbon, Portugal'));

ristorante
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(ristorante.get('name'));
console.log(ristorante.get(true));
console.log(ristorante.get(1));

console.log(ristorante);

// use example
// --------------------------
const time = 12;

console.log(
  ristorante.get(
    time > ristorante.get('open') && time < ristorante.get('closed')
  )
);
// --------------------------

console.log(ristorante.has('categories'));

ristorante.delete(2);

console.log(ristorante);
console.log(ristorante.size);

// ristorante.clear();
// console.log(ristorante);

// --------------------------
// this will not work, because these are not the same array on the heap
ristorante.set([1, 2], 'Test');
console.log(ristorante);

console.log(ristorante.get([1, 2]));
// --------------------------

// we need to do this to make it work
// --------------------------
const array = [1, 2];
ristorante.set(array, 'Test');

console.log(ristorante);

console.log(ristorante.get(array));
// --------------------------

// use example, use a DOM object as a key
// --------------------------
ristorante.set(document.querySelector('h1'), 'Heading');
console.log(ristorante);
