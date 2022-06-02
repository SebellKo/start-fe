const minNum = document.querySelector('#min');
const maxNum = document.querySelector('#max');
const numBox = document.querySelector('#box');
const btn = document.querySelector('#btn');

let minInputNum = minNum.value;
let maxInputNum = maxNum.value;
let offsetNum = 30;

minNum.addEventListener('change', (event) => {
    minInputNum = event.target.value;
});
maxNum.addEventListener('change', (event) => {
    maxInputNum = event.target.value;
})

function createRandom(min, max) {
   return Math.floor((Math.random() * (max - min + 1)) + min);
}



const clickEvent = () => {
    let randNum = createRandom(minInputNum, maxInputNum);
    if (isNaN(randNum)) {
        window.alert('숫자를 입력해주세요.');
    }
    else {
        box.innerHTML = randNum - offsetNum;
        btn.disabled = true;
        const interval = setInterval(function() {
            if (box.innerHTML == randNum) {
                clearInterval(interval);
                box.innerHTML = randNum;
                btn.disabled = false;
            }
            box.innerHTML++;
        }, 20);
    }
}

btn.addEventListener('click', clickEvent);



