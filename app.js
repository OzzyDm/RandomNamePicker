const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");
//const candidate = document.getElementById("name").value.split("\n");
const candidate = ["a", "b", "c"];
const randWinner = candidate[Math.floor(Math.random() * candidate.length)];

console.log(randWinner);

const winner = document.createElement("p");
winner.textContent = randWinner;
document.body.appendChild(winner);

drawButton.addEventListener("click", function () {
  return winner;
});

console.log(winner);
