import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/dark.css');
import Notiflix from 'notiflix';
import { refs } from './scripts';

// ---- виключення кнопки старт
refs.startBtn.setAttribute('disabled', 'disabled');
//----/ виключення кнопки старт

let choiceTime = null;
let isAvailableTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    choiceTime = selectedDates[0].getTime();
    console.log(choiceTime);
    isAvailableTime = choiceTime - Date.now();
    if (isAvailableTime <= 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  timer.onClose();
  refs.startBtn.setAttribute('disabled', 'disabled');
}
const timer = {
  intervalID: null,
  isActive: false,
  deltaTime: null,

  onClose() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalID = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = choiceTime - currentTime;
      console.log(this.deltaTime);
      const convertTime = convertMs(this.deltaTime);
      updateClockFace(convertTime);
      stopInterval(this.deltaTime, this.intervalID);
    }, 1000);
  },
};

function stopInterval(diffrenceTime, intervalId) {
  if (diffrenceTime <= 1000) {
    clearInterval(intervalId);
    this.active = false;
  }
}

//__________ підкл. значення в HTML
function updateClockFace({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minutesEl.textContent = `${minutes}`;
  refs.secondsEl.textContent = `${seconds}`;
}
//__________ / підкл. значення в HTML

// _________Конвертація _____________(год, хв , сек)

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
// _________ / Конвертація _____________(год, хв , сек)
