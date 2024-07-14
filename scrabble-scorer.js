// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let newPointStructure = transform(oldPointStructure);



let simpleScorer = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: function (word) { return word.length; }
};



let vowelBonusScorer = {
  name: "Bonus Vowels",
  description: "Each letter is worth 1 point.",
  scorerFunction: function (word) {
    let vowelScore = 0;
    let conScore = 0;
    let totalScore = 0;
    for (let char in word) {
      if (['a', 'e', 'i', 'o', 'u'].includes(word[char])) {
        vowelScore += 3;
      } else {
        conScore += 1;
      }
    }
    totalScore = vowelScore + conScore;
    return totalScore;
  }
};

let scrabbleScorer = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scorerFunction: function(word) {
    word = word.toLowerCase();
    let letterPoints = 0;
    for (let char of word){
      letterPoints += newPointStructure[char];
    }
    return letterPoints;
  }
  
};

// for (let i = 0; i < word.length; i++) {
//   for (const pointValue in newPointStructure) {
//     if (newPointStructure[pointValue].includes(word[i])) {
//       letterPoints += `Points for '${word[i]}': ${pointValue}\n`
//     }
//   }
// }


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {

  return input.question("Let's play some scrabble!\n\nEnter a word to score: ");
  // console.log(scrabbleScorer.oldScrabbleScorer(userWordChoice));
};



// console.log(newPointStructure);;

// let simpleScorer;





const scoringAlgorithms = [simpleScorer, vowelBonusScorer, scrabbleScorer];

function scorerPrompt() {
  let scorePrompt = `Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: `

  // return input.question(scorePrompt);
  let choice = input.question(scorePrompt);

  //calc
  return scoringAlgorithms[choice]
  // console.log("🚀 ~ scorerPrompt ~ algoChoice:", algoChoice)
  // console.log(algoChoice.algoChoice.(wordChoice));
  // scoringAlgorithms[choice].scoringAlgorithms[choice].name(wordChoice)
  // cho


  // console.log(`Score for 'coconut': ${}`)
}

function transform(obj) {
  let transObj = {}
  for (let val in obj){
    // console.log(obj[val])
    for (let letter of obj[val]){
      // console.log(letter)
      
      transObj[letter.toLowerCase()] = Number(val);
    }
  }
  // console.log(transObj)
  return transObj
};

function runProgram() {
  let wordChoice = initialPrompt(); // Gets userInput for the their {word}
  let scorePromptChoice = scorerPrompt();
  // console.log(scorePromptChoice)
  // console.log(`Score for '${wordChoice}': ${scorePromptChoice.scorerFunction(wordChoice)}`);
  console.log(scorePromptChoice.scorerFunction(wordChoice))
  // console.log(transform(oldPointStructure))
  // console.log(vowelBonusScorer.scorerFunction("scrabble"))


  // console.log("🚀 ~ vowelBonusScorer ~ vowelBonusScorer f(x):", vowelBonusScorer.vowelBonusScorer("scrabble"));

}

//// Old ScrabbleScorer that works
// name: "Scrabble",
//   description: "The traditional scoring algorithm.",
//   scorerFunction: function (word) {
//     word = word.toLowerCase();
//     let letterPoints = 0;
//     for (let char of word){
//       letterPoints += newPointStructure[char];
//     }
    
    
//     return letterPoints;

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScorer: simpleScorer,
  vowelBonusScorer: vowelBonusScorer,
  scrabbleScorer: scrabbleScorer,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};
