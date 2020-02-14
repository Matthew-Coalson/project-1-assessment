let total = 0;

const plusEl = document.getElementById('plus');
const minusEl = document.getElementById('minus');
const totalEl = document.getElementById('total');
const inputEl = document.getElementById('input');

plusEl.addEventListener('click', handlePlusClick);
minusEl.addEventListener('click', handleMinusClick);

function handlePlusClick() {
    if (!isNaN(parseInt(inputEl.value))) {
        total += parseInt(inputEl.value);
        render();
    } else return;
}

function handleMinusClick() {
    if (!isNaN(parseInt(inputEl.value))) {
        total -= parseInt(inputEl.value);
        render();
    } else return;
}

function render() {
    totalEl.textContent = `${total}`
    if (total < 0) {
        totalEl.style.color = 'red';
    } else totalEl.style.color = 'black';
}