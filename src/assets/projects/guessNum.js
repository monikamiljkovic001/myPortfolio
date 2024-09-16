let scoreRes = document.querySelector("#scoreResult");
let goodLuck = document.querySelector("#goodLuck");

let number = Math.trunc(Math.random() * 10) + 1;
let score = 3;
function guessTheNumber() {
  let inpNum = document.querySelector(".inputCheck").value;
  if (inpNum == number) {
    goodLuck.innerHTML = "YOU WIN!";
    goodLuck.style.color = "rgb(0, 255, 64)";
    goodLuck.style.fontSize = "80px";
    document.querySelector("#guessNum").innerHTML = number;
  } else if (score != 0) {
    let big =
      inpNum > number ? "The number is too high" : "The number is too low";
    let color = inpNum > number ? "orange" : "green";
    scoreRes.innerHTML = score--;
    goodLuck.textContent = big;
    goodLuck.style.color = color;
    let size = inpNum > number ? "35px" : "25px";
    goodLuck.style.fontSize = size;
  } else {
    score = "";
    scoreRes.innerHTML = score;
    goodLuck.textContent = "You lost the game..";
    goodLuck.style.color = "yellow";
    goodLuck.style.fontSize = "50px";
  }
}

function tryAgain() {
  number = Math.trunc(Math.random() * 10) + 1;
  score = 3;
  goodLuck.innerHTML = "Good luck";
  scoreRes.innerHTML = "";
  document.querySelector(".inputCheck").value = "";
}
document.querySelector(".btnTryAgain").addEventListener("click", tryAgain);
document.querySelector(".btnGuess").addEventListener("click", guessTheNumber);
