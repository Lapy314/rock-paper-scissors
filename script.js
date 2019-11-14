function computerPlay () {

    const cpu = document.querySelectorAll('.cpu-btn');
    let cpuSelected;

    let t = Math.floor(Math.random() * Math.floor(3));

            switch (t) {
                case 0:
                  cpu[0].classList.add('cpu-selected');
                  break;
                case 1:
                  cpu[1].classList.add('cpu-selected');
                  break;
                case 2:
                  cpu[2].classList.add('cpu-selected');
                  break;
              }

    // return computerSelection;
    cpuSelected = document.querySelector('.cpu-selected');

    return cpuSelected;
  }

// console.log(computerPlay());

function userSelection () {

  const user = document.querySelectorAll('.user-btn');
  
  // console.log(cpu.innerHTML)
  // user.forEach( item => {
  //   item.addEventListener('click', computerPlay);
  // });

  user.forEach(item => {
    item.addEventListener('click', e => {
      let cpu = computerPlay();
      item.classList.add('user-selected');
      console.log(item)
      if(item.innerHTML === cpu.innerHTML) {
        console.log('tie');
      } else {
        console.log('not tie')
      }
    })
  })

}

userSelection();



//   function game (playerSelection) {

//     function playRound (computerSelection) {

//       let a = playerSelection.toLowerCase();

//       if (a === "rock" && computerSelection === "rock") {
//         return "It's a tie!";
//       } else if (a === "rock" && computerSelection === "scissors") {
//         return "You Win! Rock beats Scissors!";
//       } else if (a === "rock" && computerSelection === "paper") {
//         return "You Lose! Paper beats Rock!";
//       }

//       if (a === "paper" && computerSelection === "rock") {
//         return "You Win! Paper beats Rock!";
//       } else if (a === "paper" && computerSelection === "scissors") {
//         return "You Lose! Scissors beat Paper!";
//       } else if (a === "paper" && computerSelection === "paper") {
//         return "It's a Tie!";
//       }

//       if (a === "scissors" && computerSelection === "rock") {
//         return "You Lose! Rock beats Scissors!";
//       } else if (a === "scissors" && computerSelection === "scissors") {
//         return "It's a Tie!";
//       } else if (a === "scissors" && computerSelection === "paper") {
//         return "You Win! Scissors beat Paper!";
//       }

//     }

//     return playRound;

//   }

//   function gameCount () {
//     let t = 0;
//     let z = 0;
//     for (let i = 0; i < 5; i++) {
//       let result = game(prompt("rock, paper, scissors"))(computerPlay());
//       console.log(result);
//       if (result.split("!")[0] === "You Win") {
//         t++;
//       } else if (result.split("!")[0] === "You Lose") {
//         z++;
//       }
//       console.log(`Ja ${t} : Glupan ${z}`);
//     }
//       if (t > z) {
//         alert("Pobjeda!");
//       } else if (t < z) {
//         alert("Izgubija!");
//       } else {
//         alert("Nerijesno!");
//       }
//   }

//   gameCount();
