console.log('*********************************************************')
console.log('##  Scripts file')
console.log('*********************************************************')

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Javascript");
console.log(37);

let variablesRule1 = "They can't start with a number";
let variablesRule2 = "Can only have letters, numbers, underscore and $ sign";
let variablesRule3 = "Can't be a JavaScript keyword";
let variablesRule4 = "Can't be the word 'name'";
let explanation = "https://stackoverflow.com/questions/27446366/javascript-why-cant-i-call-a-variable-name  *   Why can't you call a variable in JS 'name'?  *   Because window.name is a magic property of window object and can hold only strings (any object, including arrays, is coerced to primitive type and becomes something like '[Object Object]'). Variables defined in global scope become properties of global object and it can cause conflicts.  *   You can have variable name in any nonglobal scope. Simple workaround can be to wrap your code in immediately-invoked function expression (IIFE)."

let variablesConvention1 = "Don't start a variable with an uppercase letter, that has a specific use in object-oriented programming."
let variablesCOnvention2 = "All uppercase names are used for constants (value is expected to never change)  *   for example: let PI = 3.14159."
let variablesConvention3 = "Make all your variables very descriptive of their intended use and context."
let example = "let myFirstJob = 'programmer';  let myCurrentJob = 'teacher', versus: let job1 = 'programmer';  let job2 = 'teacher'";

console.log(variablesRule1);
console.log(variablesRule2, variablesRule3, variablesRule4);