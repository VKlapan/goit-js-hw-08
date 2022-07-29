import { throttle } from 'lodash';
// "use strict";
// I would use IIFE here
//
// I would add DOM ready event listener
// I would separate code into a couple of functions
// Do not use abriviations in naming
const formEl = document.querySelector('.feedback-form');
const emailInputEl = formEl.querySelector('input[name="email"]');
const msgInputEl = formEl.querySelector('textarea[name="message"]');
const btnSubmitEl = formEl.querySelector('button[type="submit"]');

// You can not trust value from the localStorage, it has to be validated.
// What would happen if there is an invalid JSON there?
let currentFeedbackFormState = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state'))
  : {};

// I would rather do it without IFs
// emailInputEl.value = currentFeedbackFormState.email || '';
// + It could be done with a loop
if (currentFeedbackFormState.email) {
  emailInputEl.value = currentFeedbackFormState.email;
}

if (currentFeedbackFormState.message) {
  msgInputEl.value = currentFeedbackFormState.message;
}

const onSubmit = event => {
  event.preventDefault();
  console.log(currentFeedbackFormState);
  // I would extract storing/reading into a separate entitity
  // + I'd rather store `{}`
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
  currentFeedbackFormState = {};
};

const fillInForm = event => {
  currentFeedbackFormState[event.target.name] = event.target.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(currentFeedbackFormState)
  );
};

btnSubmitEl.addEventListener('click', onSubmit);
formEl.addEventListener('input', throttle(fillInForm, 500));
