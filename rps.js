let rockButton = document.querySelector('#rockBtn');
let paperButton = document.querySelector('#paperBtn');
let scissorsButton = document.querySelector('#scissorsBtn')
let results = document.querySelector('#results');
let scores = document.querySelector('#score')

let scoreResults = document.createElement('p');
let scoreResultsText = document.createTextNode("First one to 5 wins. Good luck player! Refresh the page to start a new game.");
scoreResults.appendChild(scoreResultsText);
results.appendChild(scoreResults);

let scoresValue = document.createElement ('p')
let scoresValueText = document.createTextNode("Computer Score: 0 Player Score: 0");
scoresValue.appendChild(scoresValueText);

scores.appendChild(scoresValue);
//I placed game options in an array to give the computer options for r.p.s.//
function computerChoice() {
    const gameOptions = ['rock', 'paper', 'scissors'];
  const randomChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
  return randomChoice;
  }
  
  //I used playerDecision to get an input from the player then used .toLowercase() to make the answer case insensitive//
  function playerChoiceRock() {
    let playerDecision = 'rock' 
    return playerDecision;

}

function playerChoicePaper() {
    let playerDecision = 'paper'; 
    return playerDecision;

}

function playerChoiceScissors() {
    let playerDecision = 'scissors'; 
    return playerDecision;
    
}


  
  
  //I pass playerChoice(), computerChoice into the rpsRound() function  ex: rpsRound(playerChoice(), computerChoice() it prompts the user to enter their choice then randomly generates the computers choice.  It will then use the condition to alert or print an answer.  
  let computerScore = 0;
  let playerScore = 0;
  let winner = 5;
  
  let gameOver= false


  function rpsRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    scoreResults.innerText =`player chose ${playerSelection} and computer chose ${computerSelection} draw`
  }
  
  else if (playerSelection === "rock" && computerSelection === "paper") {
      scoreResults.innerText = `player chose ${playerSelection} and computer chose ${computerSelection} "You lose.  Paper beats rock"` //Computer Score: ${computerScore}` 
      return ++computerScore;
   }
  
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    scoreResults.innerText = `player chose ${playerSelection} and computer chose ${computerSelection} "You win.  rock beats scissors"`
    return  ++playerScore;
  }
  
    else if (playerSelection === "paper" && computerSelection === "rock") {
    scoreResults.innerText =`player chose ${playerSelection} and computer chose ${computerSelection} "You win.  Paper beats rock"` 
    return  ++playerScore;
  }
  
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    scoreResults.innerText = `player chose ${playerSelection} and computer chose ${computerSelection} "You lose.  scissors beats paper"` 
    return ++computerScore
  } 
  
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        scoreResults.innerText = `player chose ${playerSelection} and computer chose ${computerSelection} "You win.  scissors beats paper"`
    return  ++playerScore;
  }
  
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    scoreResults.innerText = `player chose ${playerSelection} and computer chose ${computerSelection} "You lose.  rock beats scissors"` 
    return ++computerScore;
  }
  
    else { 
    console.log("user should have entered 'Rock, Paper, or Scissors");
    }
  }




  function rpsRoundRock(){
if (playerScore===winner || computerScore===winner) {
    gameOver = true;
}

else if (!gameOver) { 
    return rpsRound(playerChoiceRock(), computerChoice())
  }};

  function rpsRoundPaper(){
      if (playerScore===winner || computerScore===winner) {
          gameOver = true;
      }
   else if (!gameOver) { 
       return rpsRound(playerChoicePaper(), computerChoice())
 }};

 function rpsRoundScissors(){
    if (playerScore===winner || computerScore===winner) {
        gameOver = true;} 

    else if (!gameOver) {
    return rpsRound(playerChoiceScissors(), computerChoice())
 }};

  rockButton.addEventListener('click', rpsRoundRock);
  paperButton.addEventListener('click', rpsRoundPaper);
  scissorsButton.addEventListener('click', rpsRoundScissors);

  rockButton.addEventListener('click', function () {
    scores.innerText= `Computer Score: ${computerScore} Player Score: ${playerScore}`
  if (playerScore === winner) {
      scores.innerText = 'player wins';
  }
  else if (computerScore === winner) {
      scores.innerText = 'you lose'
  }
});

paperButton.addEventListener('click', function () {
    scores.innerText= `Computer Score: ${computerScore} Player Score: ${playerScore}`
    if (playerScore === winner) {
        scores.innerText = 'player wins';
    }
    else if (computerScore === winner) {
        scores.innerText = 'you lose'
    }  
});
  scissorsButton.addEventListener('click', function () {
    scores.innerText= `Computer Score: ${computerScore} Player Score: ${playerScore}`
    if (playerScore === winner) {
        scores.innerText = 'player wins';
    }
    else if (computerScore === winner) {
        scores.innerText = 'you lose'
    } 
});


 // function game(){
   // console.log (rpsRound(playerChoice(), computerChoice()));
    //console.log (rpsRound(playerChoice(), computerChoice()));  
    //console.log (rpsRound(playerChoice(), computerChoice()));  
    //console.log (rpsRound(playerChoice(), computerChoice()));  
//    console.log (rpsRound(playerChoice(), computerChoice()));
  
  //  if (playerScore > computerScore) {
    //    return "player wins";}
  
      //  else { 
        //  return "computer wins"
        //}
    //}
  
  