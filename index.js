const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
// ----------- Game Functions ---------- //
// ----- Story # 8 : Role-Reversal ----- //

// function where the player can select which game type they'd like to play
selectGameType();

async function selectGameType() {
  let gameSelection = await ask(
    "Hey! , eh? If you want me (computer) to guess your number, enter (1). If you want to guess what my number is, enter (2).\n>_"
  );
  gameSelection = parseInt(gameSelection);

  if (gameSelection === 1) {
    launchComputerStart();
  } else {
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
let secretNumber = await ask(
  "What is your secret number?\n>_"
);
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
  cpuGuess = parseInt(parseInt(lowest) + parseInt(highest) /2);
  // variable for presenting the cpuGuess and sets up for a player response
  let yesOrNo = await ask(`Is your number ${cpuGuess}?\n>_`);
  // the next variable will evaluate whether the user submitted a Y or N
  // remains 'true' if player responds 'N'
  evaluateYorN(yesOrNo);
  if (evaluateYorN(yesOrNo) === true) {
    // sets up player to submit higher or lower response
    let highOrLow = await ask(
      "Is your number higher (H) or lower (L)?\n>_"
    );
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


// start();



//   let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
//   console.log('You entered: ' + secretNumber);

//   let lowest = 1;
//   // Story 6: Extend the Guess Range 
//   let highest = await ask(

// }


  // Now try and complete the program.

  // function setPlayerName() {
  //   rl.question("What's your name?", function(answer) {
  //     let playerName = (answer);
  //     //callback the function once the player is created
  //     callback(playerName);
  //     return "Hello " ${playerName} + "!" + "Select a difficulty level: easy, medium, hard, or extreme."
  //   });
  // }

// different parameters depending on the level of difficulty the player has chosen

//   let numberOfGuesses = 0
//   let maximumGuesses = 10;
//   let answerNumber = parseFloat(secretNumber);
//   let selectDifficulty = false
  















//   //if statement for if their guess was too low and what the console should log
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



