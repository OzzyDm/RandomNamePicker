const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");

function randomSelect() {
  const winner = document.getElementById("winner");
  winner.innerHTML = "";
  const candidates = document.getElementById("name").value;
  if (candidates) {
    const names = candidates.split(/\n/);
    if (names.length > 0) {
      const max = names.length - 1;
      const winnerIndex = getRandomInt(0, max);
      winner.innerHTML = names[winnerIndex];
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const winnerNumberSelect = document.querySelector("#number");
let winnerNumber = 1;

winnerNumberSelect.addEventListener("change", function () {
  winnerNumber = parseInt(this.value);
  reset();
});

function reset() {
  winner.innerHTML = "";
  document.getElementById("name").value = "";
}

drawButton.addEventListener("click", randomSelect);
resetButton.addEventListener("click", reset);
