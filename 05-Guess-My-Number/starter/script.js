"use strict";

/*console.log(document.querySelector('.message').
textContent);
document.querySelector('.message').textContent = '👌 Correct Number! ';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent =10;

console.log(document.querySelector('.guess').value);
*/

let SecretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore=0;

const displayMessage= function(message){
    document.querySelector('.message').textContent=message;
}



document.querySelector(".number").textContent = SecretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number! ";
  } else if (guess === SecretNumber) {
    displayMessage("👌 Correct Number!" );

    document.querySelector('body').style.backgroundColor='#60b347';

    document.querySelector('.number').style.width = '30rem';

    if(score> highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }



  } else if (guess > SecretNumber) {
    if (score > 1) {
    displayMessage(guess > secretNumber ? "Too High " : "Too Low!");
        document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You have lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});


document.querySelector('.again').addEventListener("click",function (){
    score=20;
    document.querySelector(".score").textContent = score;

    SecretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".number").textContent = '?';

    displayMessage("Start Guessing....");

     document.querySelector("body").style.backgroundColor = "#222";

     document.querySelector(".number").style.width = "15rem";

     document.querySelector(".guess").value='';


})
