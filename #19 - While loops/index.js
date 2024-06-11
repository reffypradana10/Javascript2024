// while loop, mengulangi sebuah code ketika ada kondisi yang benar

// let username = "";
// while (username === "" || username == null) {
//   username = window.prompt(`Enter your name`);
// }
// console.log(`Hello ${username}`);

// let username;
// do {
//   username = window.prompt(`Enter your name`);
// } while (username === "" || username == null);
// console.log(`Hello ${username}`);

let loggedin = false;
let username;
let password;

while (!loggedin) {
  username = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);
  if (username === "myusername" && password == "mypassword") {
    loggedin = true;
    console.log("You are logged in!");
  } else {
    console.log("Invalid credentials! please try again ");
  }
}
