'use strict';

if (!numProducts) deleteShoppingCart();

// tracking code
console.log('numProducts before var declaration >', numProducts);

var numProducts = 10;

// tracking code
console.log('numProducts after var declaration >', numProducts);

function deleteShoppingCart() {
  console.log('All products deleted!');
}

/*
    The intention of this code is to delete all products in the cart when numProducts reaches 0.
    However, this code will cause all cart products to be deleted even though numProducts = 10 because:
    a) var was used. So, because of hoisting,
       it can be used by code written before it.
    b) However, its value during hositing is set to
       undefined and it remains so for any code written
       before 10 is assigned to it.
    c) Therefore, when the if block tests numProducts in
       this code, numProducts is undefined and thus, falsy
       which causes the !numProducts to be true and
       deleteShoppingCart() to be executed.
*/
