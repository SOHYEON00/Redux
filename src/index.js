const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
}

const addValue = () => {
  count ++;
  updateText();
}

const minusValue = () => {
  count--;
  updateText();
}

add.addEventListener("click", addValue);
minus.addEventListener("click", minusValue);