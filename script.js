function add(a, b){
    return a + b; 
}

function subtract(a, b){
    return a - b; 
}

function multiply(a, b){
    return a * b; 
}

function divide(a, b){
    if(b === 0){
        return "Error: Division by zero!";
    }
    return a / b; 
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2); 
        case '-': 
            return subtract(num1, num2); 
        case '*': 
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2); 
        default:
            return "Error: Invalid operator!"; 
    }   
}

const numberButtons = document.querySelectorAll(".numbers"); 
const operatorButtons = document.querySelectorAll(".operator"); 
const clearButton = document.getElementById("clear"); 
const deleteButton = document.getElementById("delete"); 
const equalsButton = document.getElementById("equals"); 

// Variables to store calculator state
let currentInput = '';
let previousInput = '';
let operator = '';

// Function to update the display
function updateDisplay(value){
    const display = document.querySelector(".display");
    display.textContent = value; 
}

// Add event listeners the number buttons
numberButtons.forEach(button => {
    button.addEventListener("Click", () => {
        currentInput += button.dataset.value; // Add clicked number to current input
        updateDisplay(currentInput); 
    }); 
}); 