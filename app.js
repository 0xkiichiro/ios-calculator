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
};

const appendNumber = (num) => {
  if (currOperand.includes(".") && num === ".") return;
  if (!currOperand && num === "0") return;
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
