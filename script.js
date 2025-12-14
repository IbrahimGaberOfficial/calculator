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
  return num1 / num2;
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

const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

numbers.forEach((element)=>{
  element.addEventListener("click",(e)=>{
    display.textContent += element.textContent;
  })
})

clear.addEventListener('click', ()=>{
  display.textContent = "";
})


