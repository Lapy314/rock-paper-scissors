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

// console.log(computerPlay());
 
let cpu = computerPlay();

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const igrac = document.querySelector('#player');
const rock = rockBtn.innerHTML;
const paper = paperBtn.innerHTML;
const scissors = scissorsBtn.innerHTML;
let t = 0;
let z = 0;
function rockGame (user, cpu) {

  return function () {
    if (user === 'rock' && cpu === 'rock') {
       console.log('tie');
    } else if (user === 'rock' && cpu === 'paper') {
      console.log('you lose, paper wins');
    } else if (user === 'rock' && cpu === 'scissors') {
      console.log('you win, scissors lose');
      t++;
      igrac.append(t);
    }
  }
}

function paperGame (user, cpu) {

  return function () {
    if (user === 'paper' && cpu === 'rock') {
       console.log('you win, rock loses');
    } else if (user === 'paper' && cpu === 'paper') {
      console.log('tie');
    } else if (user === 'paper' && cpu === 'scissors') {
      console.log('you lose, scissors win');
    }
  }
}

function scissorsGame (user, cpu) {

  return function () {
    if (user === 'scissors' && cpu === 'rock') {
       console.log('you lose, rock wins');
    } else if (user === 'scissors' && cpu === 'paper') {
      console.log('you win, paper loses');
    } else if (user === 'scissors' && cpu === 'scissors') {
      console.log('tie');
    }
  }
}

rockBtn.addEventListener('click', rockGame(rock, cpu));
paperBtn.addEventListener('click', paperGame(paper, cpu));
scissorsBtn.addEventListener('click', scissorsGame(scissors, cpu));

// let cpu = computerPlay();

// console.log(game(userBtn, cpu));


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
