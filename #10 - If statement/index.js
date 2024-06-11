// If statement, jika kondisi benar, jalankan sebuah kode. jika tidak, tidak usah melakukan apa-apa

// let age = 13;
// if (age >= 18) {
//   console.log("You are old enough to enter this site");
// } else {
//   console.log("You must be 18+ to enter this site");
// }

// let time = 12;
// if (time < 12) {
//   console.log("Good morning!");
// } else {
//   console.log("Good afternoon!");
// }

// let isstudent = false;
// if (isstudent) {
//   console.log("You are a student");
// } else {
//   console.log("You are NOT a student");
// }

// let age = 14;
// let hasLicense = false;
// if (age >= 16) {
//   console.log("You are old enough to drive");

//   if (hasLicense) {
//     console.log("You have your license!");
//   } else {
//     console.log("You don't have your license yet!");
//   }
// } else {
//   console.log("You must be 16+ to have a license");
// }

const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const reselement = document.getElementById("resultelement");
let age = 0;

mysubmit.onclick = function () {
  age = mytext.value;
  age = Number(age);
  if (age >= 100) {
    reselement.textContent = `You are TOO OLD to enter this site`;
  } else if (age == 0) {
    reselement.textContent = `You cant enter. You were just born.`;
  } else if (age >= 18) {
    reselement.textContent = `Youre old enough to enter this site`;
  } else if (age < 0) {
    reselement.textContent = `Youre age cant be below 0`;
  } else {
    reselement.textContent = `You must be 18+ to enter this site`;
  }
};
