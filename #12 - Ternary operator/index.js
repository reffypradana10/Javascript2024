// ternary operator, sebuah shorcut(pintasan) statement if{} and else {},
// digunakan untuk membantu menetapkan sebuah variabel kedalam kondisi
// condition ? iftrue : iffalse

// let age = 21;
// let message = age >= 18 ? "Youre an adult" : "Youre a minor";
// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
// console.log(greeting);

// let isstudent = true;
// let message = isstudent ? "You are a student" : "You are NOT a student";
// console.log(message);

let purchaseamount = 99;
let discount = purchaseamount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseamount - purchaseamount * (discount / 100)}`);
