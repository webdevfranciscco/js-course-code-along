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

/*
console.log('*********************************************************')
console.log('##  Data types file')
console.log('*********************************************************')

let javaScriptIsFun = true;
console.log(javaScriptIsFun); // ouput = true

console.log(typeof true); // ouput = boolean
console.log(typeof javaScriptIsFun); // ouput = boolean
console.log(typeof 23); // ouput = number
console.log(typeof 'Francisco'); // ouput = string

let codingIsFun = true;

console.log(codingIsFun); // output = true
console.log(typeof codingIsFun); // ouput = boolean

codingIsFun = 'YES!';

console.log(codingIsFun); // output = YES!
console.log(typeof codingIsFun); // ouput = string

let year;
console.log(year); // output = undefined
console.log(typeof year); // ouput = undefined

year = 2025;
console.log(year); // output = 2025
console.log(typeof year);  // output = number

console.log(typeof null); // output = object
*/

let age = 30; // let is used for variables whose value can mutate
age = 31; // reasigning a new value or "mutating" the variable.

const birthYear = 1990; // const is used for variables whose value can't mutate it creates an "immutable variable"
birthYear = 1991; // This generates an error message in the console: Uncaught TypeError: Assignment to constant variable.

// An empty constant is not allowed

const job; // This creates the following error messsage in the console: Uncaught SyntaxError: Missing initializer in const declaration (birthYear = 1991 above needs to be commented out for this to happen).

// The var keyword has been replaced by let so it is considered legacy, more about this in section 7 about this. 