// Bagaimana caranya menerima sebuah input dari user
// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// EASY WAY
// let username;
// username = window.prompt(`What's your username`);
// console.log(username);

// PROFESSIONAL
let username;
document.getElementById("mysubmit").onclick = function () {
  username = document.getElementById("mytext").value;
  document.getElementById("myh1").textContent = `Hello ${username}`;
};
