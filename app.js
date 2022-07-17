const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");

function randomSelect() {
  const winnerEl = document.getElementById("winner");
  winnerEl.innerHTML = "";
  const candidates = document.getElementById("name").value;
  if (candidates) {
    const names = candidates.split(/\n/);
    if (names.length > 0) {
      const max = names.length - 1;
      const winnerIndex = getRandomInt(0, max);
      winnerEl.innerHTML = names[winnerIndex];
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

drawButton.addEventListener("click", randomSelect);
