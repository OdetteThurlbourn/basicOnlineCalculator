/** Assign a values to the operations, numbers etc. using
 *  a const variable - note const variables cannot be reassigned 
 * Credit to 'Anil' from CODEPEN - help me define my const variables
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

/**  Using the parseFloat function to ensure the 
 * string returned is passed as a float value
 * Credit to 'Anil' from CODEPEN & lesson on 'Methods for numbers'
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

/* if/else else/if statements 
*With the help of 'Love Maths' project
*/

function operate(a, b, operator) {
    if (operator === "add") {
        return add(a, b);
    } else if (operator ===)
}