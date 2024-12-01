let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function setOperator(op) {
    if (currentInput === "") return;
    operator = op;
    previousInput = currentInput;
    currentInput = "";
    display.value = "";
}

function calculateResult() {
    if (previousInput === "" || currentInput === "") return;
    
    let result;
    if (operator === "+") {
        result = parseFloat(previousInput) + parseFloat(currentInput);
    } else if (operator === "-") {
        result = parseFloat(previousInput) - parseFloat(currentInput);
    }

    display.value = result;
    currentInput = result.toString();
    previousInput = "";
    operator = "";
}

function clearDisplay() {
    display.value = "";
    currentInput = "";
    previousInput = "";
    operator = "";
}
