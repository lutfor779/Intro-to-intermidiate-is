// 1. normally uses
const student = { name: 'Lutfor', job: 'Web-devloper' };

// 2. constructor
const person = new Object();

// 3. Object create
const human = Object.create(null);
const ExampleHuman = Object.create(student);        //example
// console.log(ExampleHuman);

// 4. class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const newPeople = new People('Function calling', 15);
// console.log(newPeople);

// 5. funntion 
function people(name, age) {
    this.name = name;
    this.age = age;
}
const man = new people('function calling', 15);
// console.log(man);






// <--------------------> object types <--------------------->
const teacher = {
    id: 001,
    name: 'Lutfor',
    major: 'Mathematics',
    subjects: ['Math', 'Science', 'English'],
    balance: 5000,
    lost: function (expense, extra) {
        this.balance -= expense + extra;
        return this.balance;
    },
    last: function () {
        // console.log(this.name, ', you have only');
    }
}
teacher.last();
const remaining = teacher.lost(400, 50);
// console.log(remaining);





// keys and value of object ---------->
const pen = { color: 'red', inkColor: 'blue', price: 50, isOk: true };
// get all PROPERTY...
const key = Object.keys(pen);
// console.log(key);

// get all property's VALUE...
const value = Object.values(pen);
// console.log(value);

// get KEYS and VALUES together
const pair = Object.entries(pen);
// console.log(pair);

// DELETE an property of an object
delete pen.isOk;
// console.log(pen);

// STOP Deleting property of an object but can changed with SEAL
Object.seal(pen);
delete pen.price;       //not working due to seal
pen.price = 100;
// console.log(pen);

// STOP Deleting property of an object but can not changed with FREEZE
Object.freeze(pen);
delete pen.price;       //not working due to seal
pen.price = 20;         //not working due to freeze
// console.log(pen);







// <--------------------> object Compare <--------------------->
const first = { a: 1, b: 2 };
const second = { b: 2, a: 1 };      //try add or modify an properties to get false
function compareObjects(firstObject, secondObject) {
    if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
        return false;
    }
    for (const properties in firstObject) {
        if (firstObject[properties] !== secondObject[properties]) {
            return false;
        }
    }
    return true;
}
const isEqual = compareObjects(first, second);
// console.log(isEqual);





// <--------------------> object Bind Method <--------------------->
const mainPerson = {
    id: 101, money: 10000,
    name: 'Lutfor',
    treatDey: function (expense, tips) {
        this.money -= expense + tips;
        // console.log("used main person's treatDey function", this);
        return this.money;
    }
}
const firstPerson = {
    id: 102,
    money: 8000,
    name: 'Habib'
}
const secondPerson = {
    id: 103,
    money: 6000,
    name: 'Mosharrof'
}
const mainBalance = mainPerson.treatDey(800, 200);
// console.log(mainBalance);

const firstBalance = mainPerson.treatDey.bind(firstPerson);
const firstPersonBalance = firstBalance(800, 200);
// console.log(firstPersonBalance);
const secondBalance = mainPerson.treatDey.bind(secondPerson);
const secondPersonBalance = secondBalance(800, 200);
// console.log(secondPersonBalance);





// <--------------------> object Call & Apply Method <--------------------->
// it is similar to bind method
const mainPerson2 = {
    id: 101, money: 10000,
    name: 'Lutfor',
    treatDey: function (expense, tips) {
        this.money -= expense + tips;
        // console.log("used main person's treatDey function", this);
        return this.money;
    }
}
const firstPerson2 = {
    id: 102,
    money: 8000,
    name: 'Habib'
}
const secondPerson2 = {
    id: 103,
    money: 6000,
    name: 'Mosharrof'
}

// call
mainPerson2.treatDey(800, 200);
mainPerson2.treatDey.call(firstPerson2, 800, 200);
mainPerson2.treatDey.call(secondPerson2, 800, 200);

// apply
mainPerson2.treatDey(800, 200);
mainPerson2.treatDey.apply(firstPerson2, [800, 200]);
mainPerson2.treatDey.apply(secondPerson2, [800, 200]);