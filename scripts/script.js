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

const closePopupForm = document.querySelectorAll('.popup-form-close');
const closeSuccessForm = document.querySelectorAll('.popup-success-close');
const allSendButtons = document.querySelectorAll('.button-send');
const allCallbackButtons = document.querySelectorAll('.button-callback');
const allBookButtons = document.querySelectorAll('.button-book');
const popupForm = document.querySelector('.popup-form-block');
const popupSuccess = document.querySelector('.popup-success');

const popupFormToggle = () => {
  popupForm.classList.toggle('popup-show');
};
const popupSuccessToggle = () => {
  popupSuccess.classList.toggle('popup-show');
};

allCallbackButtons.forEach((callbackButton) => {
  callbackButton.addEventListener('click', popupFormToggle);
});

allBookButtons.forEach((bookButton) => {
  bookButton.addEventListener('click', popupFormToggle);
});

closePopupForm.forEach((closeButton) => {
  closeButton.addEventListener('click', popupFormToggle);
});

closeSuccessForm.forEach((closeButton) => {
  closeButton.addEventListener('click', popupSuccessToggle);
});

allSendButtons.forEach((sendButton) => {
  sendButton.addEventListener('click', popupFormToggle);
  sendButton.addEventListener('click', popupSuccessToggle);
});
