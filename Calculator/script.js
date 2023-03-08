let buttons = document.querySelectorAll(".calc-button");
let input = document.getElementById("input");
let calculation = "";
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.innerHTML == "AC") {
      calculation = "";
      input.innerHTML = calculation;
    } else {
      console.log(button.innerHTML);
      if (button.innerHTML == " = ") {
        try {
          if (calculation == "") {
            input.innerHTML = input.innerHTML.replace("= ", "") * 2;
          } else {
            calculation = calculation.replace("÷", "/");
            calculation = calculation.replace("×", "*");
            input.innerHTML = `= ${eval(calculation)}`;
            calculation = "";
          }
        } catch (err) {
          input.innerHTML = "ERROR";
          calculation = "";
        }
      } else if (calculation[calculation.length - 1] == " ") {
        if (
          button.innerHTML == " + " ||
          button.innerHTML == " - " ||
          button.innerHTML == " ÷ " ||
          button.innerHTML == " × "
        ) {
          calculation = calculation.substring(0, calculation.length - 3);
          calculation += button.innerHTML;
          input.innerHTML = calculation;
        } else {
          calculation += button.innerHTML;
          input.innerHTML = calculation;
        }
      } else {
        calculation += button.innerHTML;
        input.innerHTML = calculation;
      }
    }
    console.log(calculation);
  });
});
