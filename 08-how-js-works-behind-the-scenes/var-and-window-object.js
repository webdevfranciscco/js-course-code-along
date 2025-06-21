'use strict';

var x = 1;
let y = 2;
const z = 3;

console.log(
  'x, declared as ver IS a property of the window object:',
  x === window.x
);
console.log(
  'y, declared as let IS a property of the window object:',
  x === window.y
);
console.log(
  'z, declared as const IS a property of the window object:',
  x === window.z
);
