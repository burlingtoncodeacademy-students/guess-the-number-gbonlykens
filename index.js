const { randomInt } = require("crypto");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
// ----------- Game Functions ---------- //

// allows the player can select which game type they'd like to play
selectGameType();

async function selectGameType() {
  let gameSelection = await ask(
    "Welcome! If you want me (computer) to guess your number, enter (1). If you want to guess what my number is, enter (2).\n>_"
  );
  gameSelection = parseInt(gameSelection);

  if (gameSelection === 1) {
    // function for regular game
    launchComputerStart();
  } else {
    // function for reverse-game
    launchPlayerStart();
  }
}

// determining lowest number for guess range
let lowest = await ask(
  "What is the lowest number that your secret number could be?\n>_"
);
lowest = parseInt(lowest);

// determining highest number for guess range
let highest = await ask(
  "What is the highest number that your secret number could be?\n>_"
);
let highest = parseInt(highest);

// asking player to enter their secret number
let secretNumber = await ask("What is your secret number?\n>_");
console.log("You entered: " + secretNumber);
let secretNumber = parseInt(secretNumber);

// function getRandomNumber(min, max) {

// }

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
    let highOrLow = await ask("Is your number higher (H) or lower (L)?\n>_");
    // now depending on whether the player enter H or L, the cpu will generate a new num that adjusts to the new range determined by player's response
    generateNewNum(highOrLow, cpuGuess);
  }
}

// here is the function previously mentioned. New cpu guess number is generated
function generateNewNum(highOrLow, cpuGuess) {
  playerResponse = highOrLow;
  if (playerResponse === "H") {
    lowest = cpuGuess;
  } else {
    highest = cpuGuess;
  }
}

// functionality for the reverse-game
async function launchPlayerStart() {
  console.log(
    "Good choice! This round, I (the computer) will pick a secret number and YOU will try to guess what it is.\nBut first, you need to tell me the minimum and maximum numbers that I'm guessing between... "
  );

  // defining the minimum (min) and maximum (max) for the reverse game
  let min = await ask("What is the lowest number I can choose?\n>_");
  min = parseInt(min);
  let max = await ask("What is the highest number I can choose?\n>_");
  let max = parseInt(max);

  // variable for reverse-game, when cpu makes up a number
  let cpuSecretNumber = randomInt(min, max);
  function 

  // now that cpu has chosen a secret number, player starts guessing
  let playerGuessEntered = await ask(
    "Alright, I've choosen my secret number from the range options you just gave me. Let's see what you've got!\n>_"
  );

  playerGuess = parseInt(playerGuessEntered);

  // then computer program will evaluate the number entered by the player and determine if that number was higher or lower than the computer's secret number, giving informative feedback to the player about which direction to guess next
  // should persist until the player guess entered = the computer's secret number

  while(true) {
    if (playerGuess > cpuSecretNumber) {
      // player guesses higher than the secret number
      console.log("Get ya head outta the clouds!\nYou guessed TOO HIGH!");
      // variable for the player's next guess and prompt
      nextGuess = await ask("Enter your next guess...\n>_ ");
      // ensures player's next guess is a number through parsing the string entered and returning an integer back to the program
      playerGuess = parseInt(nextGuess);
      // player has guessed lower than the secret number
    } else if (playerGuess < cpuSecretNumber) {
      console.log("TOO LOW!\nGuess higher!");
      nextGuess = await ask ("Enter your next guess...\n>_ ");
      // ensures integer return
      playerGuess = parseInt(nextGuess);
    } else {
      // player has guessed computer's secret number
      (playerGuess === cpuSecretNumber) 
        console.log("WINNER WINNER CHICKEN DINNER ! ! ! ! ");
        process.exit();
      
    }
  }
///
}

// start();

// different parameters depending on the level of difficulty the player has chosen

//   let numberOfGuesses = 0
//   let maximumGuesses = 10;

//   if (answerNumber < randomNum) {
//     console.log("Too Low!");
//     console.log("You now have " +(numberOfGuesses-1)+ " guesses left!");
//   }

//   //else if statement incase the number guessed was too high
// else if (answerNumber > randomNum) {
//   console.log("Your guess was up in the clouds." + " Too High!");
//   console.log("You have " + (numberOfGuesses-1) + " guesses remaining.");
// }

// //else if statement which the console will log accordingly if they guess the correct number
// else if (answerNumber == randomNum) {
//   console.log("WINNER WINNER WINNER");
//   console.log("You used only " + (11-numberOfGuesses) + " guesses!");
//   process.exit(0);
// }

// //else if statement incase the user enters something other than a number in numerical form
// else if (answerNumber !== isNaN(answerNumber)) {
//   console.log("Please enter a recognized number.");
//   console.log("You have " +(numberOfGuesses-1)+ " guesses remaining!");
// }

// //if number of guesses has reached zero remaining
// numberOfGuesses--;
// if (numberOfGuesses == 0) {
//   console.log("You have zero guess attempts remaining.");
//   console.log("G A M E  O V E R!");
//   console.log("May we meet again.");
//   process.exit(0);
// }

//   process.exit()
////////////////////////
