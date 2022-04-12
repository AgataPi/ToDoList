// TO DO LIST ...
const images = [
  {
    img: "img/food.jpg",
  },
  {
    img: "img/bread.jpg",
  },
  {
    img: "img/breakfast.jpg",
  },
];

const picture = document.querySelector("img");

const time = 5000;
let active = 0;

const changeImage = () => {
  active++;
  if (active === images.length) {
    active = 0;
  }
  picture.src = images[active].img;
};
setInterval(changeImage, time);

const toDoList = [];

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const addBtn = document.querySelector(".add");
const list = document.getElementsByClassName("task");

const removeTask = (e) => {
  e.target.parentNode.remove();
};

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask === "" || !/\S/.test(titleTask)) {
    alert("Proszę wpisać składnik!");
  } else {
    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = titleTask + `<button class="remove">x</button>`;
    toDoList.push(task);
    ul.appendChild(task);
    input.value = "";
    task.querySelector("button").addEventListener("click", removeTask);
  }
};
ul.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

const clearBtn = document.querySelector(".clear");
const clearTask = () => {
  toDoList.splice(0, toDoList.length);
  ul.innerHTML = toDoList;
  input.value = "";
};
clearBtn.addEventListener("click", clearTask);
addBtn.addEventListener("click", addTask);
