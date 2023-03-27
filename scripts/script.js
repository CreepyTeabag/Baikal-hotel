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

const allCloseButtons = document.querySelectorAll('.popup-close');
const allSendButtons  = document.querySelectorAll('.button-send');
const allCallbackButtons = document.querySelectorAll('.button-callback');
const allBookButtons = document.querySelectorAll('.button-book');
const popupWindow = document.querySelector('.popup');

const popupToggle = () => {
  popupWindow.classList.toggle('popup-show');
};

allCloseButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', popupToggle);
});

allCallbackButtons.forEach((callbackButton) => {
  callbackButton.addEventListener('click', popupToggle);
});

allBookButtons.forEach((bookButton) => {
  bookButton.addEventListener('click', popupToggle);
});

allSendButtons.forEach((sendButton) => {
  sendButton.addEventListener('click', popupToggle);
});