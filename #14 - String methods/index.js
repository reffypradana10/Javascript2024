// String method,  memanipulasi dan bekerja dengan text (string)

// CharAt
// let username = "BroRephi";
// console.log(username.charAt(0));

// indexOf
// let username = "BroRephi";
// console.log(username.indexOf("o"));

// lastIndexOf
// let username = "BroRephio";
// console.log(username.lastIndexOf("o"));

// lenght
// let username = "BroRephi";
// console.log(username.length);

// trim
// let username = "    BroRephi";
// username = username.trim();
// console.log(username);

// toUpperCase
// let username = "BroRephi";
// username = username.toUpperCase();
// console.log(username);

// repeat
// let username = "BroRephi ";
// username = username.repeat(4);
// console.log(username);

// startswith
// let username = " BroRephi";
// let result = username.startsWith(" ");
// if (result) {
//   console.log("Your username cant begin with ' '");
// } else {
//   console.log(username);
// }

// endwith
// let username = "BroRephi ";
// let result = username.endsWith(" ");
// if (result) {
//   console.log("Your username cant end with ' '");
// } else {
//   console.log(username);
// }

// includes
// let username = "Bro Rephi";
// let result = username.includes(" ");
// if (result) {
//   console.log("Your username cant include with ' '");
// } else {
//   console.log(username);
// }

// replaceAll
// let phonenumber = "088-213-231-312";
// phonenumber = phonenumber.replaceAll("-", "");
// console.log(phonenumber);

// padStart
let phonenumber = "88-230-536-317";
phonenumber = phonenumber.padStart(17, "+62");
console.log(phonenumber);
