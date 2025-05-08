// Iteration 1: Names and Input
const hacker1 = "Joshua";
let hacker2 = "Joshua";
console.log("The driver's name is" + " " + hacker1);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i !== hacker1.length - 1) {
    const letter = hacker1[i].toUpperCase() + " ";
    spacedName += letter;
  } else {
    const letter = hacker1[i].toUpperCase();
    spacedName += letter;
  }
}
console.log(spacedName.trim());

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);
// let letter = "a";
// console.log(letter.charCodeAt(0));

// if (hacker1 === hacker2) {
//   console.log("What?! You both have the same name?");
// } else {
//   for (let i = 0; i < hacker1.length; i++) {
//     const hacker1Letter = hacker1[i];
//     const hacker2Letter = hacker2[i];

//     if (hacker1Letter < hacker2Letter) {
//       console.log("The driver's name goes first.");
//       break;
//     } else {
//       console.log("Yo, the navigator goes first, definitely.");
//       break;
//     }
//   }
// }

const compared = hacker1.localeCompare(hacker2);
if (compared === -1) {
  console.log("The driver's name goes first.");
} else if (compared === 1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (compared === 0) {
  console.log("What?! You both have the same name?");
}

const longText = "hetllo world yall et tetetetetetetst this et is a test";
let wordCount = 1;
let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordCount++;
  }

  //count the 'et' in the string
  if (
    longText[i] === "e" &&
    longText[i + 1] === "t" &&
    longText[i - 1] === " " &&
    longText[i + 2] === " "
  ) {
    etCount++;
  }
}
console.log("the number of words: ", wordCount);
console.log("the number of et: ", etCount);

console.log("A".charCodeAt(0));
//bonus 2
const phraseToCheck = "taco....,#@$%%^ cataaaa";
let cleanedPhrase = "";
let reversedPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  const currentLetterCode = phraseToCheck[i].charCodeAt(0);
  if (currentLetterCode >= 97 && currentLetterCode <= 116) {
    cleanedPhrase += phraseToCheck[i];
  }
}
for (let i = cleanedPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += cleanedPhrase[i];
}

if (reversedPhrase === cleanedPhrase) {
  console.log("yes it is a palidrome");
} else {
  console.log("nope, not a palidrome");
}
