const buttons = document.querySelectorAll(".btn"); 
const currentScreen = document.querySelector(".current-screen"); 
const previousScreen = document.querySelector(".previous-screen");  

let currentInput = "0"; 
let storedValue = null; 
let operator = null; 

function add(a, b) {
  return a + b; 
}

function subtract(a, b) {
  return a - b; 
}

function multiply(a, b) { // Fix the spelling here too
  return a * b; 
}

function divide(a, b) {
  return b === 0 ? "NaN" : a / b;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2); 
    case "-":
      return subtract(num1, num2); 
    case "*":
      return multiply(num1, num2); 
    case "/":
      return divide(num1, num2); 
    default:
      return "Invalid input"; 
  }
}

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value; // get button's value

    if (button.classList.contains("number")) {
      handleNumber(value); 
    } else if (button.classList.contains("operator")) {
      handleOperator(value); 
    } else if (button.classList.contains("clear")) {
      clearAll(); 
    } else if (button.classList.contains("delete")) {
      deleteLastDigit(); 
    } else if (button.classList.contains("equals")) {
      handleEquals();
    }
  }); 
});

function updateDisplay() {
  currentScreen.textContent = currentInput;
  previousScreen.textContent = `${storedValue || ""} ${operator || ""}`;
}

function handleNumber(value) {
  if (currentInput === "0") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function handleOperator(value) {
  if (currentInput !== "") {
    storedValue = parseFloat(currentInput);
    operator = value;
    currentInput = "";
    updateDisplay();
  }
}

function handleEquals() {
  if (storedValue !== null && operator !== null) {
    const currentNumber = parseFloat(currentInput);
    const result = operate(operator, storedValue, currentNumber);
    currentInput = result.toString();
    storedValue = null;
    operator = null;
    updateDisplay();
  }
}

function deleteLastDigit() {
  currentInput = currentInput.slice(0, -1) || "0"; 
  updateDisplay();
}

function clearAll() {
  currentInput = "0";
  storedValue = null;
  operator = null;
  updateDisplay();
}
