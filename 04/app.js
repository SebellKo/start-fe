// const element = document.getElementById('wrap');

// const element = document.querySelector('.item');

// const elements = document.querySelectorAll('div');

// const div = document.createElement('div');
// div.style.border = '1ps solid red';
// div.innerHTML = 'hello!!';

// document.body.appendChild(div);

// document.querySelector('#wrap').innerHTML = 111;

// document.querySelector('#wrap').innerHTML = document.querySelector('#wrap').innerHTML + 111;

// const el = document.getElementById('div1');
// el.remove();

// window.onload = function() {
// alert('load');
// }

// window.addEventListener('load', function() {
//     alert('hello');
// });

// window.addEventListener('load', function() {
//     console.log('load');
// })

var clickCount = 0;
function popup(event) {
    console.log(++clickCount);
    console.log(arguments, this, event, event.type, event.currentTarget);
}
document.body.addEventListener('click', popup);

document.body.addEventListener('click', function() {
    console.log('click');
})