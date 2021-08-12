const images = [{
   img: "img/food.jpg"  
},
{
    img: "img/bread.jpg"
},
{
    img: "img/breakfast.jpg"
}];

const picture = document.querySelector('img');

const time = 5000;
let active = 0;

const changeImage = () => {
    active++;
    if (active === images.length) {
        active = 0;
    }
    picture.src = images[active].img;
}
setInterval(changeImage, time)

const toDoList = []

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul')
const btn = document.querySelector('.add');
const list = document.getElementsByClassName('task');


const addTask = (e) => {
    e.preventDefault()
    const titleTask = input.value
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = "task";
    task.innerHTML = titleTask;
    toDoList.push(task)
    ul.appendChild(task);
    input.value = ""
}


form.addEventListener('submit', addTask)