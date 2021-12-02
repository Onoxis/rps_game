var playerSelection;
var computerSelection;

// FOR SCORE KEEPING LATER IN DEVELOPMENT
    let timesToPlay = 5;
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    function playRound(playerSelection, computerSelection) {
        function computerPlay(max) {
            function getRandomInt(max) {
                    return Math.floor(Math.random() * max);
                }
                    let randomPlay = getRandomInt(3);
                    if (randomPlay === 1) {
                        return "rock";
                    } else if (randomPlay === 2) {
                        return "paper";
                    } else {
                        return "scissors";
                    }
    }

    playerSelection = prompt("Choose your weapon! Rock, Paper or Scissors?").toLowerCase();
    console.log("Player: " + playerSelection)
    var computerSelection;

    var computerSelection = computerPlay(3);
    console.log("Computer: " + computerSelection);

            if (computerSelection === "rock" && playerSelection === "rock" || computerSelection === "paper" && playerSelection === "paper" || computerSelection === "scissors" && playerSelection === "scissors") {
                    tieScore++;
                    console.log("That round was a tie!")
            } else if (computerSelection === "paper" && playerSelection === "rock" || computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "paper") {
                    computerScore++;
                    console.log("Computer wins this Round!")
            } else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper") {
                    playerScore++;
                console.log("Player wins this Round!")
            }
      }


      function resetGame() {
        computerSelection = " ";
        playerSelection = " ";
    }
    
    var i = timesToPlay;

        function game(i) {
            for (let rounds = 0; rounds < i; rounds++) {
            playRound(playerSelection, computerSelection);
            resetGame()
            }

            console.log("Player Score: " + playerScore)
            console.log("Computer Score: " + computerScore)
            console.log("Tie Games: " + tieScore)

            if (playerScore > computerScore) {
                console.log("Player wins the game!");
            } else if (computerScore > playerScore) {
                console.log("Computer wind the game!")
            } else {
                (console.log("The game ends in a tie!"))
            }
        }

game(i);

/*  1. Create computer selection. 
    2. Get users selection
    3. Test the user and the players selctions
    4. Declare winner and save to variable.
    5. Display scores and test for the winner.
*/