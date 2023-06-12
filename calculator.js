export default class Calculator {
  constructor() {}

  calculate(list) {
    try {
      let equation = list.map((el) => {
        if (el == "x") return "*";
        else if (el == "=") return "";
        else return el;
      });
      return eval(equation.join(""));
    } catch (e) {
      return "Error";
    }
  }
}
