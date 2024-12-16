import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.forms[0];
const delayInput = form.elements.delay;
const stateInput = form.elements.state;
const notificaionBtn = form.querySelector("button[type='submit']");
function createPromise(delay, status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
function handlePromise(message, status) {
  if (status) {
    iziToast.success({
      position: 'topRight',
      backgroundColor: '#59A10D',
      title: 'Success',
      titleColor: 'white',
      messageColor: 'white',
      message: message,
    });
  } else {
    iziToast.error({
      position: 'topRight',
      backgroundColor: '#EF4040',
      title: 'Error',
      titleColor: 'white',
      messageColor: 'white',
      message: message,
    });
  }
}
function handleFormSubmit(event) {
  event.preventDefault();
  const delayValue = delayInput.value;
  const stateChecked = document.querySelector('input[name="state"]:checked');
  if (!delayValue || !stateChecked) {
    iziToast.error({
      position: 'topRight',
      backgroundColor: '#EF4040',
      title: 'Validation Error',
      titleColor: 'white',
      messageColor: 'white',
      message: 'Please fill out all fields.',
    });
    return;
  }
  const delay = parseInt(delayValue, 10) * 1000;
  const state = stateChecked.value;
  createPromise(delay, state === 'fulfilled')
    .then(res => handlePromise(res, true))
    .catch(err => handlePromise(err, false));
  form.reset();
}
form.addEventListener('submit', handleFormSubmit);
