"use strict";


let playerSelection;
let computerSelection;

let playerScore = 0; //sets initial score of each player
let computerScore = 0;

const buttons = document.querySelectorAll('button');
    
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {       
        computerSelection = computerPlay();
        playerSelection = e.target.id;
        playRound(playerSelection, computerSelection); 
        game();
    });
}); 


 // RESULTS // CHOICES

 const choices = document.querySelector('#choices'); // zaznacza mojego DIV

 const choicePlayer = document.createElement('div'); // tworzy nowego DIV
 choicePlayer.textContent = 'The Player chose: ';

 const choiceComp = document.createElement('div');
 choiceComp.textContent = 'The Computer chose: ';

 choices.appendChild(choicePlayer);
 choices.appendChild(choiceComp);

 const results = document.querySelector('#results'); // zaznacza mojego DIV

 const resultPlayer = document.createElement('div'); // tworzy nowego DIV
 //resultPlayer.classList.add('result_each'); // nadaje klase (zeby miec 1 div na kazdego gracza)
 resultPlayer.textContent = "The Player Score is: " + `0`;

 const resultComputer = document.createElement('div'); // i kolejnego
 //resultComputer.classList.add('result_each'); // i znow...
 resultComputer.textContent = "The Computer Score is: " + `0`;

 const resultRound = document.createElement('div'); // tworzy DIV gdzie bedzie tekst kto dostal punkt
 //resultRound.textContent = "";

 const finalResult = document.createElement('div');
 //finalResult.textContent = "";



 results.appendChild(resultPlayer);
 results.appendChild(resultComputer);
 results.appendChild(resultRound);
 results.appendChild(finalResult);


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
        choiceComp.textContent = 'The Computer chose: ' + `${computerSelection}`;
        choicePlayer.textContent = 'The Player chose: ' + `${playerSelection}`;
        resultComputer.textContent = "The Computer Score is: " + `${computerScore}`;
        resultRound.textContent = `Sorry buddy, the ${playerSelection} LOOSES with the ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        choiceComp.textContent = 'The Computer chose: ' + `${computerSelection}`;
        choicePlayer.textContent = 'The Player chose: ' + `${playerSelection}`;
        resultRound.textContent = `It's a TIE, the ${playerSelection} is the same as the ${computerSelection}`;
    } else {
        choiceComp.textContent = 'The Computer chose: ' + `${computerSelection}`;
        choicePlayer.textContent = 'The Player chose: ' + `${playerSelection}`;
        playerScore = playerScore + 1;
        resultPlayer.textContent = "The Player Score is: " + `${playerScore}`;
        resultRound.textContent = `Awesome! The ${playerSelection} WINS over the ${computerSelection}!`;
    };
};


// 5 rounds, declaration of the winner

    
    function game() {

                if (playerScore == 5) {
                    alert("You got 5 points, so you WIN!!!");
                } else if (computerScore == 5) {
                    alert("Unfortunately, the Computer won with 5 points...");
                };

    };
