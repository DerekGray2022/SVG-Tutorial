const toppingsButton = document.querySelector(".toppings");
const seedButton = document.querySelector("#seeds");
const lettuceButton = document.querySelector("#lettuce");
const ketchupButton = document.querySelector("#ketchup");
const cheeseButton = document.querySelector("#cheese");


const seeds = document.querySelector(".seeds");
const lettuce = document.querySelector(".lettuce");
const ketchup = document.querySelector(".ketchup");
const cheese = document.querySelector(".cheese");


seedButton.addEventListener("click", e => {
    seeds.classList.toggle("removed");
});

lettuceButton.addEventListener("click", e => {
    lettuce.classList.toggle("removed");
});

ketchupButton.addEventListener("click", e => {
    ketchup.classList.toggle("removed");
});

cheeseButton.addEventListener("click", e => {
    cheese.classList.toggle("removed");
});


