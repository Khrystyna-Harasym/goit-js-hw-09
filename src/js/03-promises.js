import Notiflix from 'notiflix';

const refer = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  button: document.querySelector('button'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
  
}

refer.button.addEventListener('click', onButton);

function onButton(e) {
  e.preventDefault();
  
  let delays = Number(refer.delay.value); 
  let steps = Number(refer.step.value);
  let amount = Number(refer.amount.value);

  for (let i = 1; i <= amount; i += 1){
    createPromise(i, delays)
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
    delays += steps;
  }
}

