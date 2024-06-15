// Array, sebuah variabel yang memiliki struktur dan dapat berisi lebih dari satu value

let fruits = ["apple", "orange", "banana"];

// fruits.push("coconut"); // menambahkan nilai pada akhir
// fruits.pop(); // menghapus nilai akhir
// fruits.shift(); // menghapus nilai awal
// fruits.unshift("mango"); // menambahkan nilai pada awal
// console.log(fruits);

// let numoffruits = fruits.length;
// let index = fruits.indexOf("mango");
// console.log(index);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

for (let fruit of fruits) {
  console.log(fruit);
}
