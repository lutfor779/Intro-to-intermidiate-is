const classRoom = {
    id: 101,
    className: 'One',
    seat: 50,
    moveSeat: function () {
        this.seat -= 10;
        return this.seat;
    },
    students: [{ roll: 01, name: 'Lutfor', result: 'Good' },
    { roll: 02, name: 'Mosharrof', result: 'Not Bad' },
    { roll: 03, name: 'Habib', result: 'Ok' },
    { roll: 04, name: 'Akash', result: 'Try more' },
    { roll: 05, name: 'Mim', result: 'Fail' }]
}
classRoom.moveSeat();

// students
classRoom.students.forEach(student => student.result);

// template string
const templateString = `This is template string.
The class room id no is ${classRoom.id}
It has ${classRoom.seat} remaining.
After removing more 10 seat, It will have ${classRoom.moveSeat()} seat.
Thank You!`;

// array map
const array = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98];
const array2 = array.map(x => x / 7);
// console.log(array2);
array.forEach(x => {
    x /= 7;
    // console.log(x);
});
const array3 = ['ali', 'akbar', 'hasan', 'hosen', 'toni', 'tokio', 'talukdar'];
const newArray3 = array3.filter(name => name.length != 5);
// console.log(newArray3);

// destructing in array
let [a, b, c] = [5, 10, 20];
// console.log(a, b, c);
let [balance] = [b];
// console.log(balance);
