'use strict';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// sets intersection
// ----------------------------------------------------------------------
const commonFoods = italianFoods.intersection(mexicanFoods);

console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

// sets union
// ----------------------------------------------------------------------
const italianMexicanFusion = italianFoods.union(mexicanFoods);

console.log('Union method: ', italianMexicanFusion);

// another way to create a sets union
// ----------------------------------------------------------------------
console.log(
  'Without union method:',
  new Set([...italianFoods, ...mexicanFoods])
);

// convert back to an array
// ----------------------------------------------------------------------
console.log('Back into an array:', [
  ...new Set([...italianFoods, ...mexicanFoods]),
]);

// sets difference
// ----------------------------------------------------------------------
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference Italian:', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Italian:', uniqueMexicanFoods);
