function capitalizeString(word) {
   return word.charAt(0).toUpperCase() +word.slice(1);
}

function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() *3)];
}

function getPlayerChoice() {
    
    let playerSelection = "bruh";
    while ((playerSelection != "paper") & (playerSelection != "rock") & (playerSelection != "scissors")) {
        playerSelection = window.prompt("Rock, paper, scissors?", getComputerChoice());
        playerSelection = playerSelection.toLowerCase();
    }
    return playerSelection;
}

//compares two selections (must be "rock", "paper" or "scissors")
function playRound(playerSelection, computerSelection, alertOn) {
// if they are the same
    if (playerSelection==computerSelection) {
        if (alertOn) {console.log("It's a TIE! You both chose " + playerSelection + ".");}
        return "TIE";
    } 
// if computerSelecton is worse    
    else if (((playerSelection == "paper") & (computerSelection=="scissors")) ||
    ((playerSelection == "rock") & (computerSelection=="paper")) ||
    ((playerSelection == "scissors") & (computerSelection=="rock"))) {
        if (alertOn) {console.log("You LOSE! " +capitalizeString(computerSelection) + " beats "+playerSelection+".");}
        return "LOSE";
    } 
// if computerSelecton is worse
    else if (((computerSelection == "paper") & (playerSelection=="scissors")) ||
    ((computerSelection == "rock") & (playerSelection=="paper")) ||
    ((computerSelection == "scissors") & (playerSelection=="rock"))) {
        if (alertOn) {console.log("You WIN! " +capitalizeString(playerSelection) + " beats "+computerSelection+".");}
        return "WIN";
    }
}

function playFor(n) {
    // array to keep score of wins, losses and ties
    let wlt = {"WIN": 0, "LOSE": 0, "TIE": 0};

    for (let i = 1; i <= n; i++) {
        let computer=getComputerChoice();
        let player=getPlayerChoice();

        let result =  playRound(player, computer, true);
        //console.log(result);
        wlt[result]++;
    }
    console.log(`You played ${n} rounds, won ${wlt["WIN"]} times, lost ${wlt["LOSE"]} times, and tied ${wlt["TIE"]} times.`);
}
