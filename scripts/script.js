'use strict';

let hamMenu = document.querySelector('.header-hamburger-menu');
let hamSquares = document.querySelector('.header-hamburger-squares');
let hamArrows = document.querySelector('.header-hamburger-arrows');
let menu = document.querySelector('.menu');


hamMenu.addEventListener("click", (event) => {
   hamSquares.classList.toggle('ham-show');
   hamSquares.classList.toggle('ham-hide');
   hamArrows.classList.toggle('ham-hide');
   hamArrows.classList.toggle('ham-show');
   menu.classList.toggle('ham-hide');
   menu.classList.toggle('ham-show');
});
