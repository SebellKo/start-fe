const redBtn = document.querySelector('.add-red');
const addBtn = document.querySelector('.add-btn');
const deleteBtn = document.querySelector('.delete-btn');
const textBtn = document.querySelector('.text-btn');
const resetBtn = document.querySelector('.reset-btn');
const toggleBtn = document.querySelector('.toggle-btn');
const imgBtn = document.querySelector('.image-btn');
const body = document.querySelector('body');
const box = document.querySelector('.box');
const textBox = document.querySelector('.txt');



function changeRed() {
    const changeRedBox = document.querySelectorAll('.box');
    changeRedBox.forEach(function(redBox) {
        redBox.classList.add('red');
    })
}

function addDivBox() {
    const newBox = document.createElement('div');
    newBox.classList += 'box';
    body.appendChild(newBox);
}

function delBox() {
    const boxClass = document.querySelectorAll('.box');
    if(boxClass.length != 0) {
        boxClass[boxClass.length - 1].remove();
    }
}

function insertText() {
    const text = textBox.value;
    const addTextBox = document.querySelectorAll('.box');
    addTextBox.forEach(function(box) {
        box.innerHTML = text;
    });
}

function resetBox() {
    const boxClass = document.querySelectorAll('.box');
    boxClass.forEach(function(box) {
        box.remove();
    });
}

function boxToggle() {
    const boxClass = document.querySelectorAll('.box');

    boxClass.forEach(function(box) {
        if (box.style.display === 'none') {
            box.style.display = 'block';
        }
        else if (box.style.display === 'block' || box.style.display === '') {
            box.style.display = 'none'
        }
    });
}

function insertImg() {
    const boxClass = document.querySelectorAll('.box');
    if (boxClass.length == 0) {
        addDivBox();
        insertImg();
    }
    boxClass.forEach(function(box) {
        const newImgBox = document.createElement('img');
        newImgBox.src = './image.png';
        box.append(newImgBox);
    });
}

redBtn.addEventListener('click', changeRed);
addBtn.addEventListener('click', addDivBox);
deleteBtn.addEventListener('click', delBox);
textBtn.addEventListener('click', insertText);
resetBtn.addEventListener('click', resetBox);
toggleBtn.addEventListener('click', boxToggle);
imgBtn.addEventListener('click', insertImg);