// .checked, properti dimana memeriksa HTML checkbox/radiobutton apakah sudah dicentang atau belum

const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subres = document.getElementById("subres");
const paymentresult = document.getElementById("paymentres");

mysubmit.onclick = function () {
  if (mycheckbox.checked) {
    subres.textContent = `You are subscribe`;
  } else {
    subres.textContent = `You are NOT subscribe`;
  }

  if (visabtn.checked) {
    paymentresult.textContent = "You are paying with Visa";
  } else if (mastercardbtn.checked) {
    paymentresult.textContent = "You are paying with Mastercard";
  } else if (paypalbtn.checked) {
    paymentresult.textContent = "You are paying with Paypal";
  } else {
    paymentresult.textContent = "You must select a payment type";
  }
};
