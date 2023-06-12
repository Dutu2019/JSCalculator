const buttonList = [
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("+"),
  document.getElementById("4"),
  document.getElementById("5"),
  document.getElementById("6"),
  document.getElementById("-"),
  document.getElementById("7"),
  document.getElementById("8"),
  document.getElementById("9"),
  document.getElementById("x"),
  document.getElementById("0"),
  document.getElementById("="),
  document.getElementById("/"),
  document.getElementById("."),
  document.getElementById("CE"),
];
const primaryOut = document.getElementById("primaryOut");
const secondaryOut = document.getElementById("secondaryOut");

const calculate = (str) => {
  try {
    let equation = str.split("").map((el) => {
      if (el == "x") return "*";
      else if (el == "=") return "";
      else return el;
    });
    return eval(equation.join(""));
  } catch (e) {
    return "Error";
  }
};

buttonList.map((e) => {
  e.addEventListener("click", (ev) => {
    if (secondaryOut.innerText.endsWith("=") || e.innerText == "CE") {
      primaryOut.innerText = "";
      secondaryOut.innerText = "";
    }

    if (
      e.innerText == "=" ||
      e.innerText == "+" ||
      e.innerText == "-" ||
      e.innerText == "x" ||
      e.innerText == "/"
    ) {
      if (primaryOut.innerText) {
        secondaryOut.innerText = secondaryOut.innerText.concat(
          ` ${primaryOut.innerText} ${e.innerText}`
        );
        primaryOut.innerText = "";

        if (e.innerText == "=") {
          primaryOut.innerText = calculate(secondaryOut.innerText);
        }
      }
    } else if (e.innerText !== "CE") {
      primaryOut.innerText = primaryOut.innerText.concat(e.innerText);
    }
  });
});
