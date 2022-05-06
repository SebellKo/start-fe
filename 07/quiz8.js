const minNum = document.querySelector('#min');
const maxNum = document.querySelector('#max');
const numBox = document.querySelector('#box');
const btn = document.querySelector('#btn');

let minInputNum = minNum.value;
let maxInputNum = maxNum.value;


console.log(minNum.value);

minNum.addEventListener('change', (event) => {
    minInputNum = event.target.value;
});
maxNum.addEventListener('change', (event) => {
    maxInputNum = event.target.value;
})

// btn.addEventListener('click', () => {
//     box.innerHTML = createRandom(minInputNum, maxInputNum);
//     console.log(box);
// });

function createRandom(min, max) {
   return Math.floor((Math.random() * (max - min + 1)) + min)
}

// function countNum(randNum, inputNum) {
//     setInterval(() => {
//         if (inputNum === randNum) {
//             return;
//         }
//         inputNum++;
//     }, 20);
// }

btn.addEventListener('click', () => {
    box.innerHTML = 0;
    let randNum = parseInt(createRandom(minInputNum, maxInputNum));
    const interval = setInterval(function() {
        if (box.innerHTML == randNum) {
            clearInterval(interval);
            box.innerHTML = randNum;
        }
        box.innerHTML++;
        console.log('0')
    }, 100);
})



