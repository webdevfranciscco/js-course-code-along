
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(`Length = ${friends.length}`);

// ** Add elements *******************************
// push method adds element at the end of an array
const newLengthPush = friends.push('Jay');

console.log(friends);
console.log(`push - New length = ${newLengthPush}`);

// unshift method adds element at the beginning of an array
const newLengthUnshift = friends.unshift('John');


console.log(friends);
console.log(`unshift - New length = ${newLengthUnshift}`);

// ** Remove elements ****************************

// pop removes the last element of an array and returns its value
const poppedElement = friends.pop();
const newLengthPop = friends.length;

console.log(friends);
console.log(`pop - New length = ${newLengthPop}`);
console.log(`Popped element = ${poppedElement}`);

// shift removes the first element of an array and returns its value
const shiftedElement = friends.shift();
const newLengthShift = friends.length;

console.log(friends);
console.log(`shift - New length = ${newLengthShift}`);
console.log(`Shifted element = ${shiftedElement}`);

// indexOf returns the position of a value IF it exists within the array
console.log(`The position of the element with value: 'Peter' is ${friends.indexOf('Peter')}`);
console.log(`The position of the element with value: 'Bob' is ${friends.indexOf('Bob')}`); // the return value for an element not present is -1

// includes returns true if a value is in the array and false if not
console.log(`'Steven is part of the array' is ${friends.includes('Steven')};`)
console.log(`'Bob is part of the array' is ${friends.includes('Bob')};`)

// The includes method uses strict equality (no type coercion)
friends.push(23);
console.log(` The value '23' is part of the array is ${friends.includes('23')};`)
console.log(` The value 23 is part of the array is ${friends.includes(23)};`)

// Example use for the includes method
const friendsName = 'Bob';

if (friends.includes(friendsName)) {
    console.log(`You have a friend called ${friendsName}`);
} else {
    console.log(`You don't have a friend called ${friendsName}`);
}

friends.push('Bob');

if (friends.includes(friendsName)) {
    console.log(`You have a friend called ${friendsName}`);
} else {
    console.log(`You don't have a friend called ${friendsName}`);
}