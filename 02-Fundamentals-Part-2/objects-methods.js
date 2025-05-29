
const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};

console.log(jonasObject.calcAge());

console.log(jonasObject.age);