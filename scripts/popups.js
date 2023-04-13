/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable strict */

'use strict';

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
