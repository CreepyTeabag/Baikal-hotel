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

menu.querySelector('.button-callback').addEventListener('click', menuToggle);

const formHideButtons = Array.from(document.querySelectorAll('.popup-hide'));
const blocker = Array.from(document.querySelectorAll('.blocker'));
const allCallbackButtons = Array.from(document.querySelectorAll('.button-callback'));
const allBookButtons = Array.from(document.querySelectorAll('.button-book'));
const popupForm = document.querySelector('.popup-form-block');

const hideFormElements = formHideButtons.concat(blocker);

const hidePopup = function () {
  this.closest('.popup').classList.remove('popup-show');
};

hideFormElements.forEach((element) => {
  element.addEventListener('click', hidePopup);
});

const callbackFormButtons = allCallbackButtons.concat(allBookButtons);

const showPopup = function () {
  popupForm.classList.add('popup-show');
};

callbackFormButtons.forEach((button) => {
  button.addEventListener('click', showPopup);
});
