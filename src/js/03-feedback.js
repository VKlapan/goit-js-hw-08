const formEl = document.querySelector('.feedback-form');
const emailInputEl = formEl.querySelector('input[name="email"]');
const msgInputEl = formEl.querySelector('textarea[name="message"]');
const btnSubmitEl = formEl.querySelector('button[type="submit"]');

const currentFeedbackFormState = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state'))
  : {};

if (localStorage.getItem('feedback-form-state')) {
  emailInputEl.value = currentFeedbackFormState.email;
  msgInputEl.value = currentFeedbackFormState.message;
}
const onSubmit = event => {
  event.preventDefault();
  console.log(currentFeedbackFormState);
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
};

const fillInForm = event => {
  currentFeedbackFormState[event.target.name] = event.target.value;
  console.log(currentFeedbackFormState);

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(currentFeedbackFormState)
  );

  console.log(localStorage.getItem('feedback-form-state'));
};

btnSubmitEl.addEventListener('click', onSubmit);
formEl.addEventListener('input', fillInForm);
