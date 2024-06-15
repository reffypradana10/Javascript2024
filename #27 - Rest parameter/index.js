// Rest Prameters, (...rest) mengizinkan sebuah function(fungsi) bekerja dengan varibel angka
// dari sebuah argumen yang menggabungkan kedalam sebuah array

// spread = memperluas sebuah array kedalam elemen yang terpisah
// rest = menggabungkan elemen yang terpisah kedalam array

// function openfrige(...foods) {
//   console.log(...foods);
// }
// function getfood(...foods) {
//   return foods;
// }
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "kentucky";
// const food5 = "ramen";
// // openfrige(food1, food2, food3, food4, food5);
// const foods = getfood(food1, food2, food3, food4, food5);
// console.log(foods);

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
function getaverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}
// const total = sum(1, 2, 3, 4, 5);
const total = getaverage(76, 100, 80, 20);
console.log(`Your total is $${total}`);

// function combinestring(...strings) {
//   return strings.join(" ");
// }
// const fulllname = combinestring("Mr,", "Spongebob", "Squarepants", "III");
// console.log(fulllname);
