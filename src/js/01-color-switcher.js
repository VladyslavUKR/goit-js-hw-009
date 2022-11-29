const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

stopBtn.setAttribute('disabled', 'disabled');
startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

// КНопка СТОП
function onStopBtnClick() {
  if (startBtn.hasAttribute('disabled')) {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', 'disabled');
  }
}

// КНопка СТАРТ
function onStartBtnClick(e) {
  if (stopBtn.hasAttribute('disabled')) {
    stopBtn.removeAttribute('disabled');
    startBtn.setAttribute('disabled', 'disabled');
    timerId = setInterval(
      () => (document.body.style.background = getRandomHexColor()),
      1000
    );
  }
}

// ФУНКЦІЯ ДЛЯ ГЕНЕРУВАННЯ ВИПАДКОВОГО КОЛЬОРУ
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//  / ФУНКЦІЯ ДЛЯ ГЕНЕРУВАННЯ ВИПАДКОВОГО КОЛЬОРУ
