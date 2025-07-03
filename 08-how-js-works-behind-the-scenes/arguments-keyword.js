'use strict';

// arguments keyword (only available in regular functions)

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
