let bill = 0;
let tipPercent = 0;
let numberOfPeople = 0;
let tipPerPerson = 0;
let totalPerPerson = 0;


const resetBtn = document.querySelector('#reset-btn');
const billAmount = document.querySelector('#bill-amount');
const tipBtns = document.querySelectorAll('.btn-tip');
const customTip = document.querySelector('#custom-tip');
const peopleNumber = document.querySelector('#people-number');
const tipOutputAmount = document.querySelector('#tip-output-amount');
const totalOutputAmount = document.querySelector('#total-output-amount');
const warningText = document.querySelector('#warning-text');

resetBtn.addEventListener('click', reset);

tipBtns.forEach(tipBtn => {
    tipBtn.addEventListener('click', function () {
        tipPercent = Number(tipBtn.getAttribute('data-tip-percent')) / 100;
        calculateTip();
    })
})

billAmount.addEventListener('keyup', e => {
    bill = Number(e.target.value);
    calculateTip();
})

customTip.addEventListener('keyup', e => {
    tipPercent = Number(e.target.value) / 100;
    calculateTip();
})

peopleNumber.addEventListener('keyup', e => {
    if (Number(e.target.value) === 0) {
        warningText.classList.add('warning');
    } else {
        numberOfPeople = Number(e.target.value);
        warningText.classList.remove('warning');
        calculateTip();
    }

})

function calculateTip() {
    if (bill !== 0 && tipPercent !== 0 && numberOfPeople !== 0) {
        tipPerPerson = (bill * tipPercent) / numberOfPeople;
        totalPerPerson = (bill * (1 + tipPercent)) / numberOfPeople;
        tipOutputAmount.textContent = tipPerPerson.toFixed(2);
        totalOutputAmount.textContent = totalPerPerson.toFixed(2);

    }
}

function reset() {
    bill = 0;
    tipPercent = 0;
    numberOfPeople = 0;
    tipPerPerson = 0;
    totalPerPerson = 0;
    billAmount.value = 0;
    customTip.value = 'Custom';
    peopleNumber.value = 0;
    tipOutputAmount.textContent = 0.00
    totalOutputAmount.textContent = 0.00;
}


