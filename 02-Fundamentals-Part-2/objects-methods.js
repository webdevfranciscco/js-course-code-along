
const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        console.log(this);
        return 2037 - this.birthYear;
    }
};

/*
    console.log(jonasObject.calcAge(1991));
    console.log(jonasObject['calcAge'](1991));
    
    // Altenatively
    
    console.log(jonasObject.calcAge(jonasObject.birthYear));
    console.log(jonasObject['calcAge'](jonasObject.birthYear));
    
*/

console.log(jonasObject.calcAge());
