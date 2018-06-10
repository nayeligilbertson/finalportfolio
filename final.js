

let burgerDiv = document.querySelector(".burgerDiv");
let navbar = document.querySelector(".navbar");


burgerDiv.addEventListener("click", openNav);


function openNav() {
      navbar.classList.toggle("hidden");
}


let planet = document.querySelector("#planet");
let woman = document.querySelector("#woman");
let matrix = document.querySelector("#matrix");
let venture = document.querySelector("#venture");
let animation = document.querySelector("#animation");


planet.addEventListener("click", fade);
woman.addEventListener("click", oneJump);
matrix.addEventListener("click", shake);
venture.addEventListener("click", spin);
animation.addEventListener("click", move);

function fade(){
    planet.classList.toggle('fade');
}

function oneJump(){
    woman.classList.toggle('oneJump');
}

function shake(){
    matrix.classList.toggle('shake');
}

function spin(){
    venture.classList.toggle('spin');
}
function move(){
    animation.classList.toggle('moveTo30');
}