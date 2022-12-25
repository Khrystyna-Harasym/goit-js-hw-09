
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


  const pickerTime= document.querySelector('#datetime-picker');
  const startBtn = document.querySelector('button[data-start]');
  const  second = document.querySelector('span[data-seconds]');
  const minute = document.querySelector('[data-minutes]');
  const hour = document.querySelector('[data-hours]');
  const day = document.querySelector('[data-days]');

startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
   console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.setAttribute('disabled', true);
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr(pickerTime, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

startBtn.addEventListener('click', () => {
 
    let timer = setInterval(() => {
    let countdown = new Date(pickerTime.value) - new Date();
    startBtn.setAttribute('disabled', true);
   
      if (countdown >= 0) {
      let timeObj = convertMs(countdown);
      day.textContent = addLeadingZero(timeObj.days);
      hour.textContent = addLeadingZero(timeObj.hours);
      minute.textContent = addLeadingZero(timeObj.minutes);
      second.textContent = addLeadingZero(timeObj.seconds);
    } else {
      clearInterval(timer);
    }
  }, 1000);
});