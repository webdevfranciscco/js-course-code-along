/*
    Data Types in JavaScript
    
    1. Number: Floating point numbers, used for decimal numbers, but also for integers, because JavaScript does not have a true integer data type.
    
    Example: let age = 23;

    2. String: A sequence of characters. Used for text. 
    
    Example: let firstName = 'Franciscco';
    
    3. Boolean: Logical type that can only be true or false. Used for making decisions.
    
    Example: let isGreen = true;";
    
    4. Undefined: Value taken by a variable that is not yet defined ('empty value').

    5. Null: Also means 'empty value', but more on this later.

    6. Symbol (ES2015): Value that is unique and cannot be changed, not useful for now. More on it later.

    7. BigInt (ES2020): Larger integers than the Number type can hold.

    In JS, we do not have to manually define the  data type of the values stored in a variable. Instead, data types are determined automatically, because JS has what is called dynamic typing.
    
    Even more, in JS is the value who has the type, NOT the variable! This can be the source of many bugs in code.

    The keyword typof can be used to obtain the type of a value or variable.
*/

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Francisco');

let codingIsFun = true;

console.log(codingIsFun);
console.log(typeof codingIsFun);

codingIsFun = 'YES!';

console.log(codingIsFun);
console.log(typeof codingIsFun);