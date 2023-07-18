let counterValue = 0;

const value = document.querySelector('#value');
const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

function updateCounterValue () {
    value.textContent = counterValue;
}

buttonMinus.addEventListener('click', () => {
    counterValue -=1;
    updateCounterValue();
});

buttonPlus.addEventListener('click', () => {
    counterValue +=1;
    updateCounterValue();
});

updateCounterValue();