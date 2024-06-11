// String Slicing, membuat substring dari bagian string lain
// string.slice(start, end)

const fullname = "Rephi Code";

// let firstname = fullname.slice(0, 5);
// let lastname = fullname.slice(6, 10);

// let firstchar = fullname.slice(0, 1);
// let lastchar = fullname.slice(-1);

// let firstname = fullname.slice(0, fullname.indexOf(" "));
// let lastname = fullname.slice(fullname.indexOf(" ") + 1);
// console.log(firstname);
// console.log(lastname);

const email = "Rephi@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(extension);
