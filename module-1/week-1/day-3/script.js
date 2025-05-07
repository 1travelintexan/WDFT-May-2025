//strings
// let const and var
// const is always a constant meaning it never changes
// let is a variable that can be reasigned
const petName = "Ragnar's favorite toy";
const ownerName = `Joshua`;
const thePetLength = petName.length;
// console.log("hello", thePetLength);

//with variable names in JS, we use the 'camelCase' notation
//other naming conventions
// PascalCase
// kebab-case-like-this
// snake_case_is_like_this

//number variables
const petAge = "4";
const decimal = 4;
//remember numbers do not have a length property
// console.log(decimal.length);
const emptyString = 0;
//booleans
const isAGoodBoy = false;
// console.log(emptyString == false);

const users = ["Rishi", "Ragnar", "Joshua"];
//Math object
//random number between zero and one
const randomNumber = Math.random();
const decialNumber = 2.51;
const roundedNumber = Math.round(2.4999999999);
const ceilNumber = Math.ceil(3.00000001);
const floorNumber = Math.floor(7.9999999999999);
const smallestNumber = Math.min(2, 333, 5000, 2.1);
const largestNumber = Math.max(1, 4, 500, 10000);
// console.log(largestNumber);

//string methods
const dogName = "ragnar";
//index notation
const firstLetter = dogName[1];
//toUpperCase()
const capitalName = dogName[0].toUpperCase() + dogName.slice(1);

//mathematical operations

//raised to power
const num = 3 ** 3;
//modulo operator
const isEven = 33 % 2;
const isTrue = true;
// OR operator is ||
// console.log(!isTrue && num === 27);

//loops
const user = "Joshua";
let kebabCase = "";
//for loop needs three arguments...
//first is the starting value, second is until when to run the loop, third is how much to increment the loop
for (let i = 0; i < user.length; i++) {
  //   console.log(user[i] + "-");
  if (i < user.length - 1) {
    kebabCase += user[i] + "-";
  } else {
    kebabCase += user[i];
  }
}

const newName = "Roberto";
let reversedName = "";
// console.log(kebabCase);
//for loop in reverse
for (let i = newName.length - 1; i >= 0; i--) {
  //   console.log(newName[i]);
  reversedName += newName[i];
}
// console.log(reversedName);

//FIZZ BUZZ Challenge :)
//write a loop that counts to 100 from 0
//if the number is divisible by 3 then you should log 'FIZZ'
//if the number is divisible by 5 then you should log 'BUZZ'
//if the number is divisible by 3 and 5 then you should log 'FIZZ BUZZ'
//else you should just log the number

// for (let i = 1; i <= 30; i++) {
//   if (i % 15 === 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// //with Switch statement
// for (let j = 0; j <= 30; j++) {
//   switch (true) {
//     case j % 15 === 0:
//       console.log("FUZZ BUZZ");
//       break;
//     case j % 3 === 0:
//       console.log("FIZZ");
//       break;
//     case j % 5 === 0:
//       console.log("BUZZ");
//       break;

//     default:
//       console.log(j);
//       break;
//   }
// }

let test = "hello";
let test2 = "world";
const concatenated = test + " " + test2;
const withTemplateLiterals = `hi ${test} ${test2} `;
console.log(withTemplateLiterals);

//cal a tip
const total = 84;
const tip = total * 0.15;
console.log(total + tip);
