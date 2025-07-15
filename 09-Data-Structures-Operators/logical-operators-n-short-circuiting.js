'use strict';

console.log('---- OR operator ----');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

console.log(':::');

// A use case for this:

const restaurant = {}; // << test the code below with this empty object (numberOfGuest is undefined)

//<< and then with restaurant.numberOfGuests = 23;

restaurant.numberOfGuests = 23; // if this is 0, check notes below

const guests1 = restaurant.numberOfGuests ? restaurant.numberOfGuests : 10; // WARNING: this will be 10 if numberOfGuests = 0

console.log(guests1);

const guests2 = restaurant.numberOfGuests || 10; // WARING: this will be 10 if numberOfGuests = 0
console.log(guests2);

console.log('---- AND operator ----');
//restaurant.NumberOfGuests =

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

console.log('** "restaurant.orderPizza" does not exist ****************');
if (restaurant.orderPizza) {
  console.log(restaurant.orderPizza('mushrom', 'spinach', 'asparagus'));
} else console.log('no function called');

restaurant.orderPizza = function (mainIngredient, ...otherIngredients) {
  console.log(mainIngredient);
  console.log(...otherIngredients);
};

// now the function orderPizza() exists, if we run this again, there will be an order issued:

console.log('** "restaurant.orderPizza" exists  ***********************');
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrom', 'spinach', 'asparagus');
} else console.log('no function called');

console.log('** same code but with the logical operator &&  ***********');
restaurant.orderPizza && restaurant.orderPizza('shrimp', 'dried tomatoes');
