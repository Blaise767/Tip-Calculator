const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");

const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");

const resetButton = document.getElementById("reset");

const tipButtons = document.querySelectorAll(".tip-button");
const customTip = document.getElementById("custom-tip");


let tipPercent = 0;


tipButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        tipPercent = Number(button.dataset.tip);

        customTip.value = "";

        calculateTip();

    });

});


customTip.addEventListener("input", function() {

    tipPercent = Number(customTip.value);

    calculateTip();

});


billInput.addEventListener("input", function() {

    calculateTip();

});


peopleInput.addEventListener("input", function() {

    calculateTip();

});


function calculateTip() {

    const bill = Number(billInput.value);
    const people = Number(peopleInput.value);

    if (bill <= 0 || people <= 0) {
        tipAmount.textContent = "$0.00";
        totalAmount.textContent = "$0.00";
        return;
    }

    const totalTip = bill * (tipPercent / 100);

    const tipPerPerson = totalTip / people;

    const totalBill = bill + totalTip;

    const totalPerPerson = totalBill / people;

    tipAmount.textContent = "$" + tipPerPerson.toFixed(2);
    totalAmount.textContent = "$" + totalPerPerson.toFixed(2);
}


resetButton.addEventListener("click", function() {

    billInput.value = "";
    peopleInput.value = "";
    customTip.value = "";

    tipPercent = 0;

    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";

});