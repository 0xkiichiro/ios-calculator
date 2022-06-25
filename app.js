//! variable declarions

const currResult = document.querySelector(".current-result");
const prevResult = document.querySelector(".previous-result");

let currOperand = "";
let prevOperand = "";
let operation = "";

let equalOrpercentPressed = false;

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

    if (event.target.classList.contains("ac")) {
      equalOrpercentPressed = true;
      prevOperand = "";
      currOperand = "";
      operation = "";
      updateDisplay();
    }

    if (event.target.classList.contains("pm")) {
      if (!currOperand) return;
      currOperand *= -1;
      updateDisplay();
    }

    if (event.target.classList.contains("percent")) {
      equalOrpercentPressed = true;
      if (!currOperand) return;
      currOperand = currOperand / 100;
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
      return;
  }
  currOperand = result;
  //* clears prevOperand and operation from the prevDisplay
  //* after clicking equal
  prevOperand = "";
  operation = "";
};

const appendNumber = (num) => {
  //* return if first numb is 0 and we are trying to add 0 again
  if (currOperand === "0" && num === "0") return;
  //* return if first numb is 0 and we try printing another after
  if (currOperand === "0" && num !== ".") {
    currOperand = num;
    console.log(currOperand);
    return;
  }
  //* return if there is . used already
  if (currOperand.toString().includes(".") && num === ".") return;
  //* stop overflow of display
  if (currOperand.toString().length > 9) return;
  //* dont concat after pressed equal or percent and a number right after
  if (equalOrpercentPressed) {
    currOperand = num;
    equalOrpercentPressed = false;
    return;
  }
  //* concat entered numbers
  currOperand += num;
};

const updateDisplay = () => {
  if (currOperand.toString().length > 10) {
    currOperand = Number(currOperand).toExponential(3);
  }
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
