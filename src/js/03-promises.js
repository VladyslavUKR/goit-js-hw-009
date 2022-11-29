import Notiflix from 'notiflix';
import { refs } from './scripts';

Notiflix.Notify.info('ВВЕДІТЬ БУДЬ ЛАСКА ЗНАЧЕННЯ ');
Notiflix.Notify.warning(' СЛАВА УКРАЇНІ ');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

//______________ Відправлення форми
refs.submitPromiseForm.addEventListener('submit', onSubmitPromiseForm);

function onSubmitPromiseForm(e) {
  e.preventDefault();

  let firstDelayValue = Number(refs.firstDelayValue.value);
  let delayStepValue = Number(refs.stepValue.value);
  let amountValue = Number(refs.amountValue.value);

  for (let i = 0; i < amountValue; i++) {
    createPromise(i + 1, i * delayStepValue + firstDelayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
//______________ / Відправлення форми
