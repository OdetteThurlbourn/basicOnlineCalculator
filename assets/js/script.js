/** Assign a values to the operations, numbers etc. using
 *  a const variable - note const variables cannot be reassigned 
 */

//Credit to 'Anil' from CODEPEN - help me define my const variables


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
 */

//Credit to 'Anil' from CODEPEN & lesson on 'Methods for numbers'


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

// if/else else/if statements 
//With the help of 'Love Maths' project


function operate(a, b, operator) {
    if (operator === "add") {
        return add(a, b);
    } else if (operator === "subtract") {
        return subtract(a, b);
    } else if (operator === "divide") {
        //.toFixed to the 5th decimal point
        return divide(a, b).toFixed(5);
    } else if (operator === "multiply") {
        return multiply(a, b);
    } else {
        return null;
    }
}

// Define 'let' variables

let currentOperator = null;
let firstNum = null;
let secondNum = null;
let resetScreen = false;
let result = null;

// EventListeners for numbers and operators elements
// Credit to W3School and CODEPEN

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (resetScreen) {
            clearScreen();
        }
        displayNumber(e.target.innerText);
        resetScreen = false;
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        setOperand(showNumber());
        setTheOperator(e.target.id);
        resetScreen = true;
    });
});

calculate.addEventListener("click", () => {
    result = calculateResult();
    clearScreen();
    if (result) {
        displayNumber(result);
    }
});

clear.addEventListener("click", () => {
    clearAllValues();
});

backSpace.addEventListener("click", deleteNumber);
decimal.addEventListener("click", displayDecimal);
sign.addEventListener("click", displaySign);

// Display function

function displayNumber(number) {
    display.innerText += number;
}

function showNumber() {
    return display.innerText;
}

//Setting the operator function

function setTheOperator(operator) {
    if (currentOperator == null) {
        currentOperator = operator;
    } else if (firstNum && secondNum) {
        result = operate(Number(firstNum), Number(secondNum), currentOperator);
        clearScreen();
        displayNumber(result);
        firstNum = result;
        secondNum = null;
        currentOperator = operator;
    }
}

function setOperand(value) {
    if (firstNum == null) {
        firstNum = value;
    } else {
        secondNum = value;
    }
}

function clearScreen() {
    display.innerText = "";
}

function clearAllValues() {
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    clearScreen();
}

function calculateResult() {
    if (firstNum && currentOperator && !resetScreen && !secondNum) {
        setOperand(showNumber());
        return operate(Number(firstNum), Number(secondNum), currentOperator);
    } else {
        return false;
    }
}

function deleteNumber() {
    if (display.innerText !== "0") {
        display.innerText = display.innerText.toString().slice(0, -1);
    }
    if (display.innerText === "") {
        display.innerText = "";
    }
}

function displayDecimal() {
    if (!display.innerText.includes(".")) {
        display.innerText += ".";
    }
}


