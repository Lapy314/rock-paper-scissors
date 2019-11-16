function computerPlay () {

  let computerSelection;
  let t = Math.floor(Math.random() * Math.floor(3));

  switch (t) {
    case 0:
      computerSelection = "rock";
      break;
    case 1:
      computerSelection = "scissors";
      break;
    case 2:
      computerSelection = "paper";
      break;
  }

  return computerSelection;

}

console.log(computerPlay());
 

const userBtns = document.querySelectorAll('.user-btn');
let userBtn = '';

userBtns.forEach(button => {
  button.addEventListener('click', (e) => {
    userBtn = e.target.innerHTML;
    console.log(userBtn);
  })
})


// function game (playerSelection) {

//   function playRound (computerSelection) {

//     let a = playerSelection.toLowerCase();

//     if (a === "rock" && computerSelection === "rock") {
//       return "It's a tie!";
//     } else if (a === "rock" && computerSelection === "scissors") {
//       return "You Win! Rock beats Scissors!";
//     } else if (a === "rock" && computerSelection === "paper") {
//       return "You Lose! Paper beats Rock!";
//     }

//     if (a === "paper" && computerSelection === "rock") {
//       return "You Win! Paper beats Rock!";
//     } else if (a === "paper" && computerSelection === "scissors") {
//       return "You Lose! Scissors beat Paper!";
//     } else if (a === "paper" && computerSelection === "paper") {
//       return "It's a Tie!";
//     }

//     if (a === "scissors" && computerSelection === "rock") {
//       return "You Lose! Rock beats Scissors!";
//     } else if (a === "scissors" && computerSelection === "scissors") {
//       return "It's a Tie!";
//     } else if (a === "scissors" && computerSelection === "paper") {
//       return "You Win! Scissors beat Paper!";
//     }

//   }

//   return playRound;

// }

// function gameCount () {
//   let t = 0;
//   let z = 0;
//   for (let i = 0; i < 5; i++) {
//     let result = game(prompt("rock, paper, sicssors"))(computerPlay());
//     console.log(result);
//     if (result.split("!")[0] === "You Win") {
//       t++;
//     } else if (result.split("!")[0] === "You Lose") {
//       z++;
//     }
//     console.log(`Ja ${t} : Glupan ${z}`);
//   }
//     if (t > z) {
//       alert("Pobjeda!");
//     } else if (t < z) {
//       alert("Izgubija!");
//     } else {
//       alert("Nerijesno!");
//     }
// }

// gameCount();
