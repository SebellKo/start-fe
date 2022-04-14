// const boxes = document.querySelectorAll('.box');
const leftBox = document.querySelector('.box');
const rightBox = document.querySelector('.box1');

let downX = 0;
let downY = 0;
let isMouseDown = false;

// console.log(boxes);

function dragNdrop(box) {
    box.addEventListener('mousedown', function(event) {
        isMouseDown = true;
        downX = event.clientX - box.getBoundingClientRect().left;
        downY = event.clientY - box.getBoundingClientRect().top;
    });
    box.addEventListener('mousemove', function(event) {
        if (isMouseDown) {
            box.style.left = event.clientX - downX + 'px';
            box.style.top = event.clientY - downY + 'px';
        }
    });
    box.addEventListener('mouseup', function() {
        isMouseDown = false;
    });
}

// boxes.forEach(dragNdrop);
dragNdrop(leftBox);
dragNdrop(rightBox);