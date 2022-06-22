//! variable declarions

const currResult = document.querySelector(".current-result");
const prevResult = document.querySelector(".previous-result");

let currOperand = "";
let prevOperand = "";
let operation = "";

//! click capture

document
  .querySelector(".calculator-body")
  .addEventListener("click", (event) => {
    if (event.target.classList.contains("num")) {
      appendNumber(event.target.textContent);
      updateDisplay();
    }

    if (event.target.classList.contains("operator")) {
      selectOperation(event.target.textContent);
      updateDisplay();
    }

    if (event.target.classList.contains("equal")) {
      calculate();
      updateDisplay();
    }
  });

//! functions

const calculate = () => {
  const prev = Number(prevOperand);
  const curr = Number(currOperand);
  let result = 0;

  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "x":
      result = prev * curr;
      break;
    case "÷":
      result = prev / curr;
      break;
    default:
      break;
  }
  currOperand = result;
  prevOperand = "";
  operation = "";
};

const appendNumber = (num) => {
  //* return if first numb is 0 and we are trying to add 0 again
  if (currOperand === "0" && num === "0") return;
  //* return if fitst numb is 0 and we try printing another after
  if (currOperand === "0" && num !== ".") {
    currOperand = num;
    console.log(currOperand);
    return;
  }
  //* return if there is . used already
  if (currOperand.includes(".") && num === ".") return;
  //* stop overflow of display
  if (currOperand.length > 10) return;
  currOperand += num;
};

const updateDisplay = () => {
  currResult.textContent = currOperand;
  prevResult.textContent = `${prevOperand} ${operation}`;
};

const selectOperation = (operator) => {
  if (prevOperand) {
    calculate();
  }
  operation = operator;
  prevOperand = currOperand;
  currOperand = "";
};
