
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





