const inputNum = document.querySelector('#num');
const printBtn = document.querySelector('#btn');
const resultDiv = document.querySelector('#result');

let num = inputNum.value;
let gugudanArr = [];


printBtn.addEventListener('click', function() {
    if(isNaN(num)) {
        alert('숫자를 입력해주세요 !')
        return;
    }
    resultDiv.innerHTML = Gugudan(num).join(' ');
})

inputNum.addEventListener('change', function(event) {
    num = event.target.value;
})

function Gugudan(num) {
    for (var i = 1; i < 10; i++) {
        gugudanArr[i] = ` <div>${num} X ${i} = ${num * i}</div> ` 
    }
    return gugudanArr;
}

