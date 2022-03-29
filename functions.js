"use strict";


let playerSelection;
let computerSelection;

let playerScore = 0; //sets initial score of each player
let computerScore = 0;

const choiceComp = document.getElementById('comptuericon');
const choicePlayer = document.getElementById('playericon');
const buttons = document.querySelectorAll('.btn');
    
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {       
        computerSelection = computerPlay();
            if(computerSelection === "rock") {
                choiceComp.src = 'img/unnamed.png';
                choiceComp.style.opacity = "1";
            } else if (computerSelection === "scissors") {
                choiceComp.src = 'img/scissors - Copy.png';
                choiceComp.style.opacity = "1";
            } else { 
                choiceComp.src = 'img/paper - Copy.png';
                choiceComp.style.opacity = "1";
            }
        playerSelection = e.target.id;
            if(playerSelection === "rock") {
                choicePlayer.src = 'img/unnamed2.png';
                choicePlayer.style.opacity = "1";
            } else if (playerSelection === "scissors") {
                choicePlayer.src = 'img/scissors.png';
                choicePlayer.style.opacity = "1";
            } else { 
                choicePlayer.src = 'img/paper.png';
                choicePlayer.style.opacity = "1";
        }
        playRound(playerSelection, computerSelection); 
        game();
    });
}); 

 // RESULTS // CHOICES

 const choices = document.querySelector('#choices'); // zaznacza mojego DIV

 const resultPlayer = document.querySelector('#result_player'); // zaznacza mojego DIV

 resultPlayer.textContent = `0/5`;

 const resultComputer = document.querySelector('#result_computer'); // i kolejnego

 resultComputer.textContent = `0/5`;

 const resultRound = document.querySelector('p');

 const finalResult = document.createElement('div');
 //finalResult.textContent = "";


// computerPlay to randomly return ROCK, PAPER or SCISSORS

function computerPlay() {

    let computerPlay = Math.floor((Math.random() * 3)+ 1); // random number 1, 2 or 3 is given

    if (computerPlay == 1) {
        return "rock"; // 1 returns rock, 2 returns paper, 3 returns scissors
    } else if (computerPlay == 2) {
        return "paper";
    } else {
        return "scissors";
    };
};


// single round of the game, declaration of the winner

function playRound(playerSelection, computerSelection) { //determines which configuration wins and looses, outputs selection of both players


    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissors")) {
        computerScore = computerScore + 1;
        resultComputer.textContent = `${computerScore}/5`;
        resultRound.textContent = `Sorry, the ${playerSelection} LOOSES with the ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        resultRound.textContent = `It's a TIE, the ${playerSelection} is the same as the ${computerSelection}`;
    } else {
        playerScore = playerScore + 1;
        resultPlayer.textContent = `${playerScore}/5`;
        resultRound.textContent = `Yea! The ${playerSelection} WINS over the ${computerSelection}!`;
    };

};


// 5 rounds, declaration of the winner

    
    function game() {

                if (playerScore == 5) {
                    resultRound.textContent = "You got 5 points, so you WIN!!!";
                    resultRound.style.color = '#509660';
                } else if (computerScore == 5) {
                    resultRound.textContent = "Unfortunately, the Computer won with 5 points...";
                    resultRound.style.color = '#9c625f';
                };

    };

    function finishGame() {
        if (playerScore >= 5 && computerScore <= 5 || computerScore >= 5 && playerScore <= 5 || playerScore > 5 || computerScore > 5) {
          //  alert ('The game has finished.');
          if (playerScore > computerScore) {
            alert('You won! Now the game will restart.');
            } else { alert('You lost... Now the game will restart.') };
            computerScore = 0;
            playerScore = 0;
            resultComputer.textContent = `0/5`;
            resultPlayer.textContent = `0/5`;
            resultRound.textContent = "Choose Your Shape!"
            resultRound.style.color = '#363636';
        };
    };

    document.addEventListener ('click', finishGame);