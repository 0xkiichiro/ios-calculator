//! variable declarions

const currResult = document.querySelector(".current-result");
const prevResult = document.querySelector(".previous-result");

//! click capture

document
  .querySelector(".calculator-body")
  .addEventListener("click", (event) => {
    if (event.target.classList.contains("num")) {
      render(event.target);
    } else if (event.target.classList.contains("operator")) {
      selectOperation(event.target);
    }
  });

//! functions

const calculate = () => {};

const render = (num) => {
  currResult.innerText += num.innerText;
};

const selectOperation = (operator) => {};
