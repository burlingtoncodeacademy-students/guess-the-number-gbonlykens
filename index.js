const { randomInt } = require("crypto");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
// ----------- Game Functions ---------- //
// Global Variables //
// let user choose the computer's secret number parameters through input
// let min = 1
// let max = 100
let numberOfGuesses = 0

// doesn't continue to rest of game after player enters name
// function to set playerName
// async function setPlayer () {
//   let playerName = await ask("To get started, would you mind telling me your name?");
//   while (playerName === '') {
//     selectGameType();
//   }
//   setPlayer = (playerName).toLowerCase();
// }
// setPlayer(selectGameType);



// ------ Icebox #3: Combine the Games ----- //
// allows the player can select which game type they'd like to play
async function selectGameType() {
  let gameSelection = await ask(
    "Welcome! If you want me (computer) to guess your number, enter (1). If you want to guess what my number is, enter (2).\n>_"
  );
  gameSelection = parseInt(gameSelection);

  if (gameSelection === 1) {
    // function for regular game
    launchComputerStart();
  } else if (gameSelection === 2) {
    // function for reverse-game 
    launchPlayerStart();
  } else {
    console.log("Please select which game type you'd like to play (1) or (2)\n >_ ");
  }
}

// ---- Story 6: Extend the Guess Range ----- //
async function launchComputerStart() {
let lowest = await ask(
  "What is the lowest number that your secret number could be?\n>_ "
);
lowest = parseInt(lowest);

// determining highest number for guess range
let highest = await ask(
  "What is the highest number that your secret number could be?\n>_ "
);
highest = parseInt(highest);

// asking player to enter their secret number
let secretNumber = await ask("What is your secret number?\n>_ ");
console.log("You entered: " + secretNumber);
secretNumber = parseInt(secretNumber);

// function getRandomNumber(min, max) {
// function for reading the user's response, returning true means it will keep going until cpu guesses user's secret number
function evaluateYorN(yesOrNo) {
  input = yesOrNo.charAt(0).toUpperCase(0);
  if (input === "Y") {
    return console.log("I WIN! I WIN! I WIN!")(process.exit())
    // playAgain();
  } else if (input === "N") {
    return true;
  }
};

while (true) {
  await enterGuess(lowest, highest);
}

// 'enter guess' has several nested functions that integrate together depending on certain outcomes to further gameplay
async function enterGuess(lowest, highest) {

  // cpu submitting a guess using the avg b/w lowest & highest nums set by player
  cpuGuess = parseInt(parseInt(lowest) + parseInt(highest) / 2);
  // variable for presenting the cpuGuess and sets up for a player response
  let yesOrNo = await ask(`Is your number ${cpuGuess}?\n>_`);
  // the next variable will evaluate whether the user submitted a Y or N
  // remains 'true' if player responds 'N'
  evaluateYorN(yesOrNo);
  if (evaluateYorN(yesOrNo) === true) {
    // sets up player to submit higher or lower response
    let highOrLow = await ask("Is your number higher (H) or lower (L)?\n>_ ");
    highOrLow = (highOrLow).charAt(0).toUpperCase(0);
    // now depending on whether the player enter H or L, the cpu will generate a new num that adjusts to the new range determined by player's response
    generateNewNum(highOrLow, cpuGuess);
  }
}

// here is the function previously mentioned. New cpu guess number is generated
function generateNewNum(highOrLow, cpuGuess) {

  // ----- Story 4: Modify Your Guess Range ----- //
  playerResponse = highOrLow;
  if (playerResponse === "H") {
    lowest = cpuGuess;
  } else if (playerResponse === "L") {
    highest = cpuGuess;
    // incase player responds with something other than H or L
  } else {
    console.log("Please only enter 'H' for Higher or 'L' for Lower.")
  }
}
}

// ------ Story 8: Role Reversal --------- //
// functionality for the reverse-game
async function launchPlayerStart() {
  console.log(
    "Good choice! This round, I (the computer) will pick a secret number and YOU will try to guess what it is.\nBut first, you need to tell me the minimum and maximum numbers that I'm guessing between... "
  );

  // defining the minimum (min) and maximum (max) for the reverse game defined by player
  let min = await ask("What is the lowest number I can choose?\n>_ ");
  min = parseInt(min);

  let max = await ask("What is the highest number I can choose?\n>_ ");
  max = parseInt(max);

  // variable for reverse-game, when cpu makes up a number using player inputs for min and max
  // let cpuSecretNumber = randomInt(Math.floor((max + min) / 2))
  let cpuSecretNumber = randomInt(min, max);
  

  // now that cpu has chosen a secret number, player starts guessing
  let playerGuessEntered = await ask(
    "Alright, I've choosen my secret number from the range options you just gave me. Let's see what you've got!\n>_ "
  );
  playerGuess = parseInt(playerGuessEntered);

  // then computer program will evaluate the number entered by the player and determine if that number was higher or lower than the computer's secret number, giving informative feedback to the player about which direction to guess next
  // should persist until the player guess entered = the computer's secret number

  while(true) {
    if (playerGuess > cpuSecretNumber) {
      // player guesses higher than the secret number
      console.log("TOO HIGH!");
      // variable for the player's next guess and prompt
      nextGuess = await ask("Enter your next guess...\n>_ ");
      // ensures player's next guess is a number through parsing the string entered and returning an integer back to the program
      playerGuess = parseInt(nextGuess);
      // player has guessed lower than the secret number
    } else if (playerGuess < cpuSecretNumber) {
      console.log("TOO LOW!");
      nextGuess = await ask ("Enter your next guess...\n>_ ");
      // ensures integer return
      playerGuess = parseInt(nextGuess);
    } else {
      // player has guessed computer's secret number
      (playerGuess === cpuSecretNumber) 
        console.log("WINNER WINNER WINNER ! ! ! ! ");
        process.exit();
      
    }
  }
///
}

selectGameType();


// make playAgain function

//   let numberOfGuesses = 0
//   let maximumGuesses = 10;

// //if number of guesses has reached zero remaining
// numberOfGuesses--;
// if (numberOfGuesses == 10) {
//   console.log("You have zero guess attempts remaining.");
//   console.log("G A M E  O V E R!");
//   process.exit(0);

// was going to make a seperate function to pass through cpuSecretNumber but RandomInt does it for me with crypto import BUT IF I HAD... :

// function randomNum(min, max) {
//   let guessRange = max - min + 1;
//   return min + Math.floor(Math.random() * guessRange) + min;
// }