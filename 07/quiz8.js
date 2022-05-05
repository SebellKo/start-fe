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

btn.addEventListener('click', () => {
    box.innerHTML = createRandom(minInputNum, maxInputNum);
    console.log(minInputNum, maxInputNum);
});

function createRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}



