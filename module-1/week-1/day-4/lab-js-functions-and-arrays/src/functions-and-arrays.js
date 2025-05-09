// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
  //   console.log(num1, num2);
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arrayOfWords) {
  if (arrayOfWords.length === 0) return null;
  let longest = "";
  arrayOfWords.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNums) {
  let total = 0;
  arrayOfNums.forEach((number) => {
    total += number;
  });
  return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNums) {
  if (arrayOfNums.length === 0) return 0;
  const total = sumNumbers(arrayOfNums);
  return total / arrayOfNums.length;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arrayOfWords, word) {
  if (arrayOfWords.length === 0) return null;
  //   let wordInsideArray = false;
  //   arrayOfWords.forEach((oneWord) => {
  //     if (oneWord === word) {
  //       wordInsideArray = true;
  //     }
  //   });

  //   return wordInsideArray;

  //oneliner version
  return arrayOfWords.includes(word);
}
