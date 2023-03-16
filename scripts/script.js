'use strict';

let hamMenu = document.querySelector('.header-hamburger-menu');
let hamSquares = document.querySelector('.header-hamburger-squares');
let hamArrows = document.querySelector('.header-hamburger-arrows');


addEventListener("click", (event) => {
   if( hamSquares.classList.contains('ham-show') ) {
      hamSquares.classList.remove('ham-show');
      hamSquares.classList.add('ham-hide');
      hamArrows.classList.remove('ham-hide');
      hamArrows.classList.add('ham-show');
   } else {
      hamArrows.classList.remove('ham-show');
      hamArrows.classList.add('ham-hide');
      hamSquares.classList.remove('ham-hide');
      hamSquares.classList.add('ham-show');
   }
});