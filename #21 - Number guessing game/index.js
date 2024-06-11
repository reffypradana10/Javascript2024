// Number Guessing Game

const minnum = 1;
const maxnum = 100;
const answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;

let attempt = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guest a number between ${minnum} - ${maxnum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minnum || guess > maxnum) {
    window.alert("please enter a valid number");
  } else {
    attempt++;
    if (guess < answer) {
      window.alert("TOO LOW! TRY AGAIN");
    } else if (guess > answer) {
      window.alert("TOO HIGH! TRY AGAIN!");
    } else {
      window.alert(`CORRECT! The answer was ${answer}. IT took you ${attempt} attempts`);
      running = false;
    }
  }
}
