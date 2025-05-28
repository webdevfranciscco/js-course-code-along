
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(`Length = ${friends.length}`);

// push method adds element at the end of an array
const newLengthPush = friends.push('Jay');

console.log(friends);
console.log(`New length = ${newLengthPush}`);

// unshift method adds element at the beginning of an array
const newLengthUnshift = friends.unshift('John');

console.log(friends);
console.log(`New length = ${newLengthUnshift}`);