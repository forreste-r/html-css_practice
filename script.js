var container = document.querySelector(".container");
var screenValue = document.querySelector(".screen");
let values = { current: "", previous: "" };
console.log(container);

container.addEventListener("click", (e) => {
  let numValue = checkNum(e.target.classList);
  if (e.target.classList.contains("clearall")) {
    values.previous = "";
    values.current = "";
    console.log(values.previous + " asd" + values.current);
    screenValue.innerHTML = "_";
  }
  if (e.target.classList.contains("clr")) {
    values.previous = "";
    screenValue.innerHTML = "_";
  }
  if (e.target.classList.contains("backspace")) {
    screenValue.innerHTML;
  }

  if (e.target.classList.contains("add")) {
    values.previous = values.current;
    values.current = "_";
    screenValue.innerHTML = "_";
  }

  if (e.target.classList.contains("sub")) {
    values.previous = values.current;
    console.log(values.previous);

    console.log("function");
  }

  if (e.target.classList.contains("mul")) {
    values.previous = values.current;
    console.log(values.previous);

    console.log("function");
  }

  if (e.target.classList.contains("div")) {
    values.previous = values.current;
    console.log(values.previous);

    console.log("function");
  }
  if (e.target.classList.contains("num")) {
    if (screenValue.innerHTML == "_") {
      screenValue.innerHTML = "";
    }
    screenValue.innerHTML += numValue;
    values.current = screenValue.innerHTML;
    console.log(values.current);
  }
});

function checkNum(inputNum) {
  switch (inputNum[0]) {
    case "one":
      return +1;
    case "two":
      return +2;
    case "thr":
      return +3;
    case "for":
      return +4;
    case "fiv":
      return +5;
    case "six":
      return +6;
    case "svn":
      return +7;
    case "eit":
      return +8;
    case "nin":
      return +9;
    case "zro":
      return +0;
  }
}
