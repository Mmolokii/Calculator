const buttons = document.querySelectorAll(".btn"); 
const currentScreen = document.querySelector(".current-screen"); 
const previousScreen = document.querySelector(".previous-screen");  

let currentInput = "0"; 
let storedValue = null; 
let operator = null; 

function add(a, b){
  return a + b; 
}

function subtract(a, b){
  return a - b; 
}

function mulitply(a, b){
  return a * b; 
}

function divide(a, b){
  if(b === 0){
    return "NaN"; 
  } else {
    return a / b; 
  }
}

function operate(operator, num1, num2){
  switch(operator){
    case "+": 
      return add(num1, num2); 
    case "-": 
      return subtract(num1, num2); 
    case "*": 
      return mulitply(num1, num2); 
    case "/": 
      return divide(num1, num2); 
    default: 
      return "Invalid input"; 
  }
}

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value // get button's value

    if(button.classList.contains("number")){
      handleNumber(value); 
    } else if(button.classList.contains("operator")){
      handleOperator(value); 
    } else if(button.classList.contains("clear")){
      clearAll(); 
    } else if(button.classList.contains("delete")){
      deleteLastDigit(); 
    } else if(button.classList.contains("equals")){
      handleEquals();
    }
  }); 
}); 

function updateDisplay(){
  currentScreen.textContent = currentInput;
}

function handleNumber(value){
  console.log(`Number clicked: ${value}`);
  if(currentInput === 0){
    currentInput = value; 
  } else {
    currentInput += value;
  }
  updateDisplay(); 
}

function handleOperator(value){
  currentInput += value; 
  updateDisplay(); 
}

function deleteLastDigit(){
  currentInput = currentInput.slice(0, -1) || "0"; 
  updateDisplay();
}

function clearAll(){
  currentInput = 0; 
  previousScreen.textContent = ""; 
  updateDisplay(); 
}

