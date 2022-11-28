/** Assign a values to the operations, numbers etc. using
 *  a const variable - note const variables cannot be reassigned 
*/

const operators = document.querySelectorAll("operator");
const numbers = document.querySelectorAll("number");
const display = document.querySelector("display");
const equal = document.querySelector("equal");
const allClear = document.querySelector("allClear");
const backSpace = document.querySelector("backSpace");
const enter = document.getElementById("equals")
const negativePositive = document.querySelector("negativePositive")
const digits = display.innerText.length;

/**  Using the parseFloat function 
* to define the operators and to return the first number after the value
* has been parsed as a string
*/

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}