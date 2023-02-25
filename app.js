const buttons = document.querySelectorAll(`input[type="button"]`);
const displayInput = document.querySelector(".display input");
let number = "";

const numberButtons = {
  0: document.querySelector(`input[value="0"]`),
  1: document.querySelector(`input[value="1"]`),
  2: document.querySelector(`input[value="2"]`),
  3: document.querySelector(`input[value="3"]`),
  4: document.querySelector(`input[value="4"]`),
  5: document.querySelector(`input[value="5"]`),
  6: document.querySelector(`input[value="6"]`),
  7: document.querySelector(`input[value="7"]`),
  8: document.querySelector(`input[value="8"]`),
  9: document.querySelector(`input[value="9"]`),
};

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Backspace":
      e.preventDefault();
      deleteNumber();
      break;
    case "Escape":
      e.preventDefault();
      clearDisplay();
      break;
    case "Enter":
    case "=":
      evaluateExpression();
      console.log(number);
      break;
    case ".":
      document.querySelector('input[value="."]').click();
      break;
    case "+":
      document.querySelector('input[value="+"]').click();
      break;
    case "-":
      document.querySelector('input[value="-"]').click();
      break;
    case "*":
      document.querySelector('input[value="*"]').click();
      break;
    case "/":
      document.querySelector('input[value="/"]').click();
      break;
    default:
      if (numberButtons[e.key]) {
        numberButtons[e.key].click();
      }
      break;
  }
});

for (let button of buttons) {
  button.addEventListener("click", () => {
    handelButton(button);
  });
}

const handelButton = (button) => {
  switch (button.value) {
    case "=":
      evaluateExpression();
      break;
    case "AC":
      clearDisplay();
      break;
    case "DE":
      deleteNumber();
      break;
    default:
      number += button.value;
      displayInput.value = number;
      break;
  }
};

const evaluateExpression = () => {
  if (number.includes("0/") || number.includes("00/")) {
    displayInput.value = "0";
    number = "";
  } else {
    evalValue = eval(number);
    displayInput.value = evalValue;
    number = "";
    number += evalValue;
  }
};
const clearDisplay = () => {
  number = "";
  displayInput.value = "";
};
const deleteNumber = () => {
  number = number.slice(0, -1);
  displayInput.value = number;
};
