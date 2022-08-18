const $choiseInput = document.getElementById("choises-input");
const $choiseList = document.getElementById("choises-list");
const TIMES = 30;
const INTERVAL_TIME = 60;

$choiseInput.addEventListener("keyup", handleKeyUp);

function handleKeyUp(e) {
  const value = e.target.value;
  if (e.key === "Enter") {
    randomSelect();
  }
  createOptionList(value);
}

function createOptionList(value) {
  $choiseList.innerHTML = "";
  value.split(",").forEach(createOption);
}

function createOption(option) {
  if (option.trim().length > 0) {
    const $element = document.createElement("li");
    $element.classList.add("choises-list-item");
    $element.textContent = option;
    $choiseList.append($element);
  }
}

function randomSelect() {
  let counter = 0;
  const interval = setInterval(() => {
    const randomChoise = pickRandomOption();

    randomChoise.classList.add("choises-list-item--chosen");

    counter++;

    if (counter < TIMES) {
      setTimeout(() => {
        randomChoise.classList.remove("choises-list-item--chosen");
      }, INTERVAL_TIME);
    }

    if (counter >= TIMES) {
      clearInterval(interval);
    }
  }, INTERVAL_TIME);
}

function pickRandomOption() {
  const $choises = document.querySelectorAll(".choises-list-item");
  const randomNumber = Math.floor(Math.random() * $choises.length);

  return $choises[randomNumber];
}
