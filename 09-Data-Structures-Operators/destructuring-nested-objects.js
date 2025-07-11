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

restaurant.orderDelivery({
  time: '20:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

/*
const { openingHours } = restaurant;

// nested objects

const { fri } = openingHours;
console.log('fri:', fri);

const {
  fri: { open, close },
} = openingHours;
console.log('open:', open, 'close:', close);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log('o:', o, 'c:', c);
*/
