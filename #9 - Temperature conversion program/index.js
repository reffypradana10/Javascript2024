// Temperature conversion program

const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

const convert = () => {
  if (toFarenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "℉";
  } else if (toCelcius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "℃";
  } else {
    result.textContent = "Select a unit";
  }
};
