const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
}
  // Now try and complete the program.

  function setPlayerName(callback) {
    rl.question("What's your name?", function(answer) {
      let playerName = (answer);
      //callback the function once the player is created
      callback(playerName);
      return "Hello " (playerName) + "!" + "Select a difficulty level: easy, medium, hard, or extreme."
    });
  }

// different parameters depending on the level of difficulty the player has chosen

  let numberOfGuesses = 0
  let maximumGuesses = 10;
  let answerNumber = parseFloat(secretNumber);
  let selectDifficulty = false
  















  //if statement for if their guess was too low and what the console should log
  if (answerNumber < randomNum) {
    console.log("Too Low!");
    console.log("You now have " +(numberOfGuesses-1)+ " guesses left!");
  }

  //else if statement incase the number guessed was too high
else if (answerNumber > randomNum) {
  console.log("Your guess was up in the clouds." + " Too High!");
  console.log("You have " + (numberOfGuesses-1) + " guesses remaining.");
}

//else if statement which the console will log accordingly if they guess the correct number
else if (answerNumber == randomNum) {
  console.log("WINNER WINNER WINNER");
  console.log("You used only " + (11-numberOfGuesses) + " guesses!");
  process.exit(0);
}

//else if statement incase the user enters something other than a number in numerical form
else if (answerNumber !== isNaN(answerNumber)) {
  console.log("Please enter a recognized number.");
  console.log("You have " +(numberOfGuesses-1)+ " guesses remaining!");
}

//if number of guesses has reached zero remaining
numberOfGuesses--;
if (numberOfGuesses == 0) {
  console.log("You have zero guess attempts remaining.");
  console.log("G A M E  O V E R!");
  console.log("May we meet again.");
  process.exit(0);
}

// why do I not understand how to structure the blocks of code
// how can I get better at taking what's in my mind and creating it in the program

  process.exit();


