const point = document.querySelector('#point');
const life = document.querySelector('#life');
const box = document.querySelector('.box');
const bug = document.querySelector('#bug');


function toggleBug() {
    if (bug.style.display == 'block' || bug.style.display == ''){
        bug.style.display = 'none';
    }
    else if(bug.style.display == 'none'){
        bug.style.display = 'block';
        randPosition(box.clientWidth, box.clientHeight,  bug.clientWidth, bug.clientHeight);
    }
};

// function randPosition(boxWidth, bugWidth) {
//     bug.style.left = Math.floor(Math.random() * (boxWidth - bugWidth)) + 1 + 'px';
//     bug.style.top = Math.floor(Math.random() * (boxWidth - bugWidth)) + 1 + 'px';
// }


window.addEventListener('load', function() {
    setInterval(toggleBug, 2000);
});


box.addEventListener('click', function(event) {
    if (event.target == bug) {
        point.innerHTML = parseInt(point.innerHTML) + 1;
        bug.style.display = 'none';
    }
    else if (event.target == box) {
        life.innerHTML = parseInt(life.innerHTML) - 1;
    }

    if (life.innerHTML == 0) {
        alert('gameover');
        location.reload();
    }
});

randPosition = (boxWidth, boxHeight, bugWidth, bugHeight) => {
    bug.style.left = Math.floor(Math.random() * (boxWidth - bugWidth)) + 1 + 'px';
    bug.style.top = Math.floor(Math.random() * (boxHeight - bugHeight)) + 1 + 'px';
}