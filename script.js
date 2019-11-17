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
 

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const igrac = document.querySelector('#player');
const glupan = document.querySelector('#cpu');
const rock = rockBtn.innerHTML;
const paper = paperBtn.innerHTML;
const scissors = scissorsBtn.innerHTML;
const win = document.querySelector('.popup-win');
const lose = document.querySelector('.popup-lose');
const tie = document.querySelector('.popup-tie');

let t = 0;
let z = 0;

function rockGame (user, cpu) {
  
  return function () {

    cpu = computerPlay()

    if (user === 'rock' && cpu === 'rock') {
       console.log('tie');
       t++;
       z++;
       igrac.textContent = `Igrac: ${t}`;
       glupan.textContent = `Cpu: ${z}`;
    } else if (user === 'rock' && cpu === 'paper') {
      console.log('you lose, paper wins');
       z++;
       glupan.textContent = `Cpu: ${z}`;
    } else if (user === 'rock' && cpu === 'scissors') {
      console.log('you win, scissors lose');
       t++;
       igrac.textContent = `Igrac: ${t}`;
    }

    console.log(t, z)
    
    if (t === 3) {
      win.style.display = 'block';
    } else if (z === 3) {
      lose.style.display = 'block';
    } else if (t + z >= 5) {
      tie.style.display = 'block';
    }

  }
}

function paperGame (user, cpu) {

  return function () {

    cpu = computerPlay()

    if (user === 'paper' && cpu === 'rock') {
       console.log('you win, rock loses');
       t++;
       igrac.textContent = `Igrac: ${t}`;
    } else if (user === 'paper' && cpu === 'paper') {
      console.log('tie');
       t++;
       z++;
       igrac.textContent = `Igrac: ${t}`;
       glupan.textContent = `Cpu: ${z}`;
    } else if (user === 'paper' && cpu === 'scissors') {
      console.log('you lose, scissors win');
       z++;
       glupan.textContent = `Cpu: ${z}`;
    }

    console.log(t, z)

    if (t === 3) {
      win.style.display = 'block';
    } else if (z === 3) {
      lose.style.display = 'block';
    } else if (t + z >= 5) {
      tie.style.display = 'block';
    }

  }
}

function scissorsGame (user, cpu) {

  return function () {

    cpu = computerPlay()

    if (user === 'scissors' && cpu === 'rock') {
       console.log('you lose, rock wins');
       z++;
       glupan.textContent = `Cpu: ${z}`;
    } else if (user === 'scissors' && cpu === 'paper') {
      console.log('you win, paper loses');
       t++;
       igrac.textContent = `Igrac: ${t}`;
    } else if (user === 'scissors' && cpu === 'scissors') {
      console.log('tie');
       t++;
       z++;
       igrac.textContent = `Igrac: ${t}`;
       glupan.textContent = `Cpu: ${z}`;
    }

    console.log(t, z)

    if (t === 3) {
      win.style.display = 'block';
    } else if (z === 3) {
      lose.style.display = 'block';
    } else if (t + z >= 5) {
      tie.style.display = 'block';
    }

  }
}

rockBtn.addEventListener('click', rockGame(rock, cpu));
paperBtn.addEventListener('click', paperGame(paper, cpu));
scissorsBtn.addEventListener('click', scissorsGame(scissors, cpu));
