//initialize count as 0
//listen for clicks on increment button
//increment count variable when button is clicked
//change count-el in HTML to reflect new count

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = 0;
}

function reset() {
  count = 0;
  countEl.textContent = 0;
  saveEl.textContent = "Previous day's clients:";
}
