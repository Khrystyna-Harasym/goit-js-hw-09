function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');

const stopBtn = document.querySelector('button[data-stop]');

let colorBg = null;

startBtn.addEventListener('click', () => {

    colorBg = setInterval(() => {
      const randomBgc = getRandomHexColor();
        document.body.style.backgroundColor = randomBgc;
       
    }, 1000);
     startBtn.setAttribute('disabled', '');
});

stopBtn.addEventListener('click', () => {
    clearInterval(colorBg);
    startBtn.removeAttribute('disabled', '');
});
