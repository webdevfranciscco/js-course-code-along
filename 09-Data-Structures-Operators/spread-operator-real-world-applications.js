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
};

//REAL WORLD EXAMPLES

const ingredients = ['mushroms', 'asparagus', 'cheese'];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// or with the spread operator:

restaurant.orderPasta(...ingredients);

// Use of the spread operator in objects:
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

console.log('New restaurant:', newRestaurant);

// shallow copy of objects with the spread operator

const restaurantCopy = { ...restaurant };
restaurant.name = 'Ristorante Roma';

console.log('Restaurant copy:', restaurantCopy);
console.log("Restaurant's name :", restaurant.name);
console.log("New restaurant's name :", restaurantCopy.name);
