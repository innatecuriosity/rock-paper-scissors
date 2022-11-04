function capitalizeString(word) {
   return word.charAt(0).toUpperCase() +word.slice(1);
}

function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() *3)];
}

function getPlayerChoicePrompt() {
    
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

//returns to inital conditions
function pressResetButton() {
    wlt = {"WIN": 0, "LOSE": 0, "TIE": 0}; 
    n =0;
    
    h1.textContent = "Want to play?";
    h3.textContent = "Press rock paper or scissors.";
    resultLog.textContent =`You played ${n} rounds, won ${wlt["WIN"]} times, lost ${wlt["LOSE"]} times, and tied ${wlt["TIE"]} times.`;    
}


//plays n-times
function playFor(n) {
    // array to keep score of wins, losses and ties
    wlt = {"WIN": 0, "LOSE": 0, "TIE": 0};

    for (let i = 1; i <= n; i++) {
        let computer=getComputerChoice();
        let player=getPlayerChoice();

        let result =  playRound(player, computer, true);
        //console.log(result);
        wlt[result]++;
    }
    console.log(`You played ${n} rounds, won ${wlt["WIN"]} times, lost ${wlt["LOSE"]} times, and tied ${wlt["TIE"]} times.`);
}

//making of the DOM
const body = document.querySelector("body");
body.style.cssText = "padding: 20px; font-family: monospace";

const content = document.createElement("div");
content.classList = "content";
content.style.cssText = "display:flex; justify-content: center; align-items: center";

body.appendChild(content);

const computerSide = document.createElement("div");
const playerSide = document.createElement("div");

for (item of [computerSide, playerSide]) {
    item.style.cssText = "display:flex; padding: 10px; border: solid; border-width:2px; width: 200px; font-size: 40px; height:50px; text-align:center;";
    content.appendChild(item);
}

playerSide.setAttribute("id","playerSide");
playerSide.setAttribute("id","computerSide");


const vs = document.createElement("div");
vs.style.cssText = "color: red; font-size: 40px; width:60px; height: 50px; text-align:center";
vs.textContent = "VS";

content.insertBefore(vs, playerSide);

//banner for results
const results = document.createElement("div");
const h1 = document.createElement("h1");
h1.setAttribute("id","resultTitle");
const h3 = document.createElement("h3");
h3.setAttribute("id", "resultSubtitle");

const resultLog = document.createElement("p");
const resetButton =document.createElement("button");
resetButton.textContent = "Reset results."

resetButton.addEventListener("click", pressResetButton);


for (each of [h1, h3, resultLog, resetButton]) {results.appendChild(each)};

body.appendChild(results);
// div for buttons
const controls = document.createElement("div");
const listOfOptions = document.createElement("div");
listOfOptions.style.cssText = "display:flex; flex-direction: column; align-items: right;";


body.appendChild(controls)
controls.appendChild(listOfOptions);

// creating three buttons, that play a round once clicked
const rock = document.createElement("button");
rock.setAttribute("id", "rock");
const paper = document.createElement("button");
paper.setAttribute("id", "paper");
const scissors = document.createElement("button");
scissors.setAttribute("id", "scissors");

for (each of [rock, paper, scissors]) {

    each.style.cssText = "height: 30px; font-size:16px; font-weight: 500;";

    each.classList = each.id;
    each.textContent = each.id;

    each.addEventListener("click", function (e) {
        playerSelection = e.target.id;
        computerSelection = getComputerChoice();

        
        //actually plays it, logs results
        result = playRound(playerSelection, computerSelection, true);
        wlt[result]++;
        n++;
        //console.log(`You played ${n} rounds, won ${wlt["WIN"]} times, lost ${wlt["LOSE"]} times, and tied ${wlt["TIE"]} times.`);

        playerSide.textContent = playerSelection.toUpperCase();
        computerSide.textContent = computerSelection.toUpperCase();

        //updates results on screen
        switch (result){
            case "WIN":
                h1.textContent = "You WON!";
                h3.textContent = capitalizeString(playerSelection) + " beats "+computerSelection+".";
                break;

            case "LOSE":
                h1.textContent = "You LOST!";
                h3.textContent = capitalizeString(computerSelection) + " beats "+playerSelection+".";        
                break;

            case "TIE":
                h1.textContent = "It's a TIE";
                h3.textContent = "You both chose " + playerSelection + ".";
                break;
            }
        resultLog.textContent =`You played ${n} rounds, won ${wlt["WIN"]} times, lost ${wlt["LOSE"]} times, and tied ${wlt["TIE"]} times.`;
    });

    listOfOptions.appendChild(each)
}

// array to keep score of wins, losses and ties


let wlt = {"WIN": 0, "LOSE": 0, "TIE": 0};
let n = 0;
pressResetButton()