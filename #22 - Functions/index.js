// Function, sebuah section yang bisa digunakan kembali, mendeklarasikan kode satu kali
// dan menggunakannya saat kamu butuh. Paggil function untuk mengeksekusi sebuah kode

// function happybirthday(username, age) {
//   console.log("Happy birthday to you");
//   console.log(`Happy birthday dear ${username}`);
//   console.log("Happy birthday to you");
//   console.log(`Your ${age} years old`);
// }
// happybirthday("Coboy", 21);
// happybirthday("spongebob", 30);

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

function isEven(number) {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return number % 2 === 0 ? true : false;
}

function isvalidemail(email) {
  //   if (email.includes("@")) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return email.includes("@") ? true : false;
}

console.log(isvalidemail("repgi@repi.com"));
console.log(isvalidemail("repi.com"));
