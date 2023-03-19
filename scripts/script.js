/* eslint-disable linebreak-style */
/* eslint-disable strict */

'use strict';

const hamMenu = document.querySelector('.header-hamburger-menu');
const hamSquares = document.querySelector('.header-hamburger-squares');
const hamArrows = document.querySelector('.header-hamburger-arrows');
const menu = document.querySelector('.menu');
const allMenuLinks = document.querySelectorAll('.menu-link');

const menuToggle = () => {
  hamSquares.classList.toggle('ham-show');
  hamArrows.classList.toggle('ham-show');
  menu.classList.toggle('ham-show');
};

hamMenu.addEventListener('click', menuToggle);

allMenuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', menuToggle);
});
