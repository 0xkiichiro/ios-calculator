//! variable declarions

const currResult = document.querySelector(".current-result");
const prevResult = document.querySelector(".previous-result");

let currOperand = "";
let prevOperand = "";

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

const calculate = () => {};

const appendNumber = (num) => {
  if (currOperand.includes(".") && num === ".") return;
  if (!currOperand && num === "0") return;
  if (currOperand.length > 10) return;
  currOperand += num;
};

const updateDisplay = () => {
  currResult.textContent = currOperand;
};

const selectOperation = (operator) => {
  console.log(operator);
};
