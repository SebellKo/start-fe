import './app.css';

const formTag = document.querySelector('.new-task');
const inputBar = document.querySelector('.new-task input');
const textSpan = document.querySelector('.text');
const listContainer = document.querySelector('.container ul');

let deleteBtn = document.querySelectorAll('.delete');
let toggleBox = document.querySelectorAll('.toggle-checked');




formTag.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(deleteBtn);
    const content = inputBar.value;
    
    const contentList = `<li>
    <button class="delete">×</button>
    <input type="checkbox" class="toggle-checked">
    <span class="text">${content}</span>
    </li>`;

    listContainer.appendChild(contentList);
    initElements();
})

const initElements = () => {
    deleteBtn =document.querySelectorAll('.delete');
    toggleBox = document.querySelectorAll('.toggle-checked');
}

toggleBox.forEach((item) => {
    item.addEventListener('click', () => {
        if (toggleBox.checked == true) {
            textSpan.style.textDecoration = 'line-through';
        }
        else if (toggleBox.checked == false) {
            textSpan.style.textDecoration = 'none';
        }
        console.log(listContainer);
    });
});

deleteBtn.forEach((item) => {
    item.addEventListener('click', () => {
        listContainer.removeChild(listContainer.lastChild);
        console.log('hi');
    });
});
