const inputValue = document.getElementById('giveNumber');
const showResult = document.getElementById('showResult');

function multiple() {
    showResult.innerHTML = inputValue.value * 2;
}

const ageValue = document.getElementById('age');
const showAge = document.getElementById('showAge');

function ageCalc() {
    showAge.innerHTML = new Date().getFullYear() - ageValue.value;
}

const age1 = document.getElementById('age1');
const age2 = document.getElementById('age2');
const showDef = document.getElementById('showDef');

function ageDef() {
    showDef.innerHTML = age1.value - age2.value;
}

const fontFamily = document.getElementById('fontFamily');
const display = document.getElementById('display');
const range = document.getElementById('range');
const text = document.getElementById('text');

// function changeTxtFamily() {
//     display.style.fontFamily = fontFamily.value;
//     display.innerHTML = text.value;
//     console.log(fontFamily.value);
// }

function changeTxtConfig() {
    display.style.fontFamily = fontFamily.value;
    display.style.fontSize = `${range.value}px`;
    display.innerHTML = text.value;
}

// function addTxt() {
//     display.style.fontFamily = fontFamily.value;
//     display.innerHTML = text.value;
// }

const red = document.getElementById('range1');
const green = document.getElementById('range2');
const blue = document.getElementById('range3');
const body = document.getElementById('body');
function changeBkColor() {
    body.style.backgroundColor =
        'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
}
