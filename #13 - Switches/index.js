// SWITCH, dapat sangat efisien untuk mengantikan statement if else yang banyak

// let day = 9;
// switch (day) {
//   case 1:
//     console.log("Its Monday");
//     break;
//   case 2:
//     console.log("Its Tuesday");
//     break;
//   case 3:
//     console.log("Its Wednesday");
//     break;
//   case 4:
//     console.log("Its Thurstday");
//     break;
//   case 5:
//     console.log("Its Friday");
//     break;
//   case 6:
//     console.log("Its Saturday");
//     break;
//   case 7:
//     console.log("Its Sunday");
//     break;
//   default:
//     console.log(`${day} its NOT day`);
// }

let testscore = 1;
let lettergrade;
switch (true) {
  case testscore >= 90:
    lettergrade = "A";
    break;
  case testscore >= 80:
    lettergrade = "B";
    break;
  case testscore >= 70:
    lettergrade = "C";
    break;
  case testscore >= 60:
    lettergrade = "D";
    break;
  default:
    lettergrade = "F";
}

console.log(lettergrade);
