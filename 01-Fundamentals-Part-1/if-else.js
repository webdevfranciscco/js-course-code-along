
const age = 15;

if (age >= 18) {
    console.log(`Sarah can apply for a driver's license 🚗`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century = 20;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);