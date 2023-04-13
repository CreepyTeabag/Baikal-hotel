/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable strict */

'use strict';

const menu = document.querySelector('.menu');
const hamSquares = document.querySelector('.header-hamburger-squares');
const hamArrows = document.querySelector('.header-hamburger-arrows');
const menuCallbackButton = menu.querySelector('.button-callback');
const allMenuLinks = Array.from(document.querySelectorAll('.menu-link'));
const closingMenuElements = [hamArrows, menuCallbackButton].concat(allMenuLinks);

const showMenu = () => {
  hamSquares.classList.remove('ham-show');
  hamArrows.classList.add('ham-show');
  menu.classList.add('ham-show');
};

const hideMenu = () => {
  hamSquares.classList.add('ham-show');
  hamArrows.classList.remove('ham-show');
  menu.classList.remove('ham-show');
};

hamSquares.addEventListener('click', showMenu);

closingMenuElements.forEach((element) => {
  element.addEventListener('click', hideMenu);
});
