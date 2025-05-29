
const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
};

console.log(jonasObject.calcAge(1991));
console.log(jonasObject['calcAge'](1991));

// Altenatively

console.log(jonasObject.calcAge(jonasObject.birthYear));
console.log(jonasObject['calcAge'](jonasObject.birthYear));

