let num1 = "";
let operator = "";
let shouldResetInput = false;
let input = document.querySelector("h1");
let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");

// Event Listeners
document.querySelector(".clear").addEventListener("click", () => clearScreen());
document.querySelector(".delete").addEventListener("click", () => deleteDigit());
document.querySelector(".equals").addEventListener("click", () => evaluate());



for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => assignOperator(operators[i].textContent));
}


for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", () => appendDigit(digits[i].textContent));
}


// Functions
function assignOperator(oper) {
    if (oper === "÷") operator = "/";
    else if (oper === "×") operator = "*";
    else operator = oper;
    num1 = input.textContent;
    shouldResetInput = true;
}


function evaluate() {
    if (operator === "" || num1 === "") return;
    input.textContent = operate(operator, parseFloat(num1), parseFloat(input.textContent));
    num1 = "";
}


function appendDigit(digit) {
    if (digit === "." && input.textContent.includes(".")) return;
    if (input.textContent === "0" || shouldResetInput) clearInput();
    input.textContent += digit;
}


function clearScreen() {
    input.textContent = "0";
    operator = "";
    num1 = "";
}


function deleteDigit() {
    input.textContent = input.textContent.slice(0, -1);
}


function clearInput() {
    input.textContent = "";
    shouldResetInput = false;
}


function add(num1, num2) {
    return (num1 + num2);
}


function subtract(num1, num2) {
    return (num1 - num2);
}


function multiply(num1, num2) {
    return (num1 * num2);
}


function divide(num1, num2) {
    if (num2 === 0) {
        alert("Cannot divide by 0...");
        return;
    }
    return (num1 / num2);
}


function operate(oper, num1, num2) {
    if (oper === "+")
        return add(num1, num2);
    else if (oper === "-")
        return subtract(num1, num2);
    else if (oper === "*")
        return multiply(num1, num2);
    else if (oper === "/")
        return divide(num1, num2);
    else
        return "Invalid selection";
}
