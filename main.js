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