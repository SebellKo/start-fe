// var count = [10, 20, 30, 40, 50, 60, 70, 100];
// var sum = 0;
// var average = 0;

// for (var i = 0; i < count.length; i++) {
//     sum += count[i];
// }

// average = sum / count.length;

// console.log(average);

// for (var i = 1; i < 10; i++) {
//     for (var j = 1; j < 10; j++) {
//         console.log(i * j);
//     }
//     j = 1;
// }

// function Gugudan(num) {
//     for (var i = 1; i < 10; i++) {
//         console.log(num * i);
//     }
// }

// Gugudan(1111);

// var person = {
//     name: '고세종',
//     age : 26,
//     gender: 'male',

//     sayHello() {
//         console.log(`Hi! my name is ${this.name}`)
//     }
// }

// console.log(person);
// person.sayHello();

var arr = [];
var sum = 0;

while(true) {
    var num = window.prompt("중단하고 싶으시면 취소를 누르세요.");
    arr.push(num);
    if (num === null) {
        arr.splice(arr.length - 1, 1);
        break;
    }
}

for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
}
console.log(arr);
console.log(sum);

