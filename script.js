function add(num1 = 0, num2 = 0) {
  return num1 + num2;
}

function subtract(num1 = 0, num2 = 0) {
  return num1 - num2;
}

function multiply(num1 = 1, num2 = 1) {
  return num1 * num2;
}

function divide(num1 = 1, num2 = 1) {
  return Math.floor(num1 / num2);
}

/**
 * takes an operator and two numbers and then calls one
 * of the above functions on the numbers.
 */
function operate(operator = "", num1 = 1, num2 = 1) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    //   break;

    case "−":
    case "-":
      return subtract(num1, num2);
    //   break;

    case "*":
      return multiply(num1, num2);
    //   break;

    case "/":
    case "÷":
      return divide(num1, num2);
    //   break;

    default:
      break;
  }
}

function deActivateOperatorBG() {
  operators.forEach((e) => (e.style.backgroundColor = "#cdcacc"));
}

const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

let havWaitedOperations = false;
let pressedOperator = false;
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

numbers.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (pressedOperator) {
      deActivateOperatorBG();
      display.textContent = element.textContent;
      pressedOperator = false;
    } else {
      display.textContent += element.textContent;
    }
  });
  element.addEventListener("click", (e) => {});
});

operators.forEach((element) => {
  element.addEventListener("click", (e) => {
    deActivateOperatorBG();
    element.style.backgroundColor = "#c6e2c7ff";
    if (display.textContent.length > 0) {
      if (!havWaitedOperations) {
        // start state
        // no waited operations
        firstNumber = parseInt(display.textContent);
        operator = element.textContent;
        pressedOperator = true;
        havWaitedOperations = true;
      } else {
        secondNumber = parseInt(display.textContent);
        let result = operate(operator, firstNumber, secondNumber);

        operator = element.textContent;
        display.textContent = `${result}`;
        pressedOperator = true;
        firstNumber = result;
        havWaitedOperations = true;
      }
    }
  });
});

equal.addEventListener("click", (e) => {
  if (display.textContent.length > 0 && operator != "") {
    secondNumber = parseInt(display.textContent);
    let result = operate(operator, firstNumber, secondNumber);
    display.textContent = `${result}`;
    deActivateOperatorBG();
    havWaitedOperations = false;
    operator = "";
  }
});

clear.addEventListener("click", () => {
  deActivateOperatorBG();
  havWaitedOperations = false;
  display.textContent = "";
  operator = "";
  firstNumber = 0;
  secondNumber = 0;
});
