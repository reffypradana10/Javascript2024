// Spread Operator, ... mengijikan sebuah iterabel kedalam array atau string
// untuk di jabarkan kedalam elemen yang terpisah

// let number = [1, 2, 3, 4, 5];
// let max = Math.max(...number);
// let min = Math.min(...number);
// console.log(min);

// let username = "bro rephi";
// let letters = [...username].join("");
// console.log(letters);

let fruits = ["apple", "banana", "orange"];
let vegetables = ["sawi", "kentang", "cabe"];
let newfruits = [...fruits, ...vegetables, "eggs", "milk"];
console.log(newfruits);
