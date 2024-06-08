// Const = sebuah variabel yang tidak dapat dirubah

const PI = 3.14159;
let radius;
let cirumference;

document.getElementById("mysubmit").onclick = function () {
  radius = document.getElementById("mytext").value;
  radius = Number(radius);
  cirumference = 2 * PI * radius;
  document.getElementById("myh3").textContent = cirumference + " cm";
};
