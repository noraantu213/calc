//get the display element
let display = document.getElementById('display');

// to append a number to the display
function appendNumber(number) {
    display.value = display.value === "0" ? number : display.value + number;
}

// to append an operator to the display
function appendOperator(operator) {
    const lastChar = display.value[display.value.length - 1];
    if ("+-*/%^".includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

//to clear the display
function clearDisplay() {
    display.value = "";
}

//to calculate the expression present in the display
function calculate() {
    try {
        const expression = display.value.replace(/\^/g, '**');
        display.value = eval(expression);
    } catch (e) {
        display.value = "Error";
    }
}



