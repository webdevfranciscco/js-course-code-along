'use strict';

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set());

console.log(new Set('Jonas'));

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));

console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');

ordersSet.add('Garlic Bread');

ordersSet.delete('Risotto');

console.log(ordersSet);

// this logs "Undefined" it does not work
// -----------------------------------------------------------------
console.log(ordersSet[0]);

// getting values out of a set into an array
// -----------------------------------------------------------------
console.log('-------------------');
const array = [];
let i = 0;
for (const order of ordersSet) {
  console.log(`set element[${i}]`, order);
  array[i] = order;
  i++;
}

console.log('array:', array);

console.log('-------------------');

ordersSet.clear(); // this empties the set

console.log(ordersSet);

// use case - remove duplicate values from arrays
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUniqueSet = new Set(staff);
console.log('staffUniqueSet:', staffUniqueSet);
// which can be made into an array instead, like this:
const staffUniqueArray = [...new Set(staff)];
console.log('staffUniqueArray:', staffUniqueArray);
