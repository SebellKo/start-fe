const box = document.querySelector('#box')

let isMouseDown = false;
let mouseX = 0;
let mouseY = 0;

box.addEventListener('mousedown', function(event) {
    isMouseDown = true;
    mouseX = event.clientX - box.getBoundingClientRect().left;
    mouseY = event.clientY - box.getBoundingClientRect().top;
});

box.addEventListener('mousemove', function(event) {
    if (isMouseDown) {
        box.style.left = event.clientX - mouseX + 'px';
        box.style.top = event.clientY - mouseY + 'px';
    }
})

box.addEventListener('mouseup', function() {
    isMouseDown = false;
});