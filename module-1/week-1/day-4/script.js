//while loop
let number = 0;
// while (number < 10) {
//   console.log("here is the number", number);
//   //always make sure to increment the correct variable with while loops
//   number++;
// }

//do while
let doNumber = 11;

do {
  //   console.log("inside the do while", doNumber);
  doNumber++;
} while (doNumber < 10);

//****************functions ***************/
//declaring a function with the 'function' keyword
function subtractTwoNums(num1, num2) {
  return num1 - num2;
}

//declare a function with the 'fat arrow' syntax
const multiplyTwoNums = (number1, number2) => {
  return number1 * number2;
};

//invoking a function
//or 'calling' a function
const theDiff = subtractTwoNums(20000, 5);
// console.log(subtractTwoNums(200, 10));
// console.log(subtractTwoNums(100, 20));
// console.log(subtractTwoNums(20, 13));
// console.log(subtractTwoNums(2, 1));
// console.log(theDiff);
const afterMultiply = multiplyTwoNums(20, 5);
// console.log(afterMultiply);

//*****************Arrays ************/
const pets = ["Ragnar", "Buddy", "Kiwi", "Kiwi", "Luna", "blah"];
pets.push("Luna");
// console.log("after push", pets);
// pets.pop();
// console.log("after pop", pets);
// pets.unshift("Luna");
// console.log("after unshift", pets);
// pets.shift();
// console.log("after shift", pets);

//.splice
//can add elements at any location and also it great for deleting
//removing buddy with splice
//.splice needs at least two things, the starting index and the delete count

// pets.splice(1, 1, "Luna", "Leonidas");
// console.log("after splice", pets);
// console.log(pets);
// for (let i = 0; i < pets.length; i++) {
//   console.log("inside the for loop", pets[i]);
// }

//forEach with the function keyword
// pets.forEach(function (pet) {
//   console.log("inside the forEach", pet);
// });

const petsWithFourLetterNames = [];
//forEach with the fat arrow
pets.forEach((currentPet, currentIndex, wholeArray) => {
  //   console.log("the current pet", currentPet, "at index ", currentIndex);
  //   console.log("here is the array", wholeArray);
  //if statement inside the forEach loop that checks the lengths of the names
  if (currentPet !== "Kiwi") {
    petsWithFourLetterNames.push(currentPet);
  }
});

// console.log("pets with 4 letters", petsWithFourLetterNames);

//******************functions with arrays as arguments ***********/
const ourPets = [
  "Ragnar",
  "Buddy",
  "Kiwiiiiiiiiiiiiii",
  "Luna",
  "Leonidas",
  "Reaper",
];
const students = ["Amirrrrr!!!!!", "Roberto", "Rishi", "Maedeh"];

function findPetWithLongestName(array) {
  let longestPet = "";
  array.forEach((pet) => {
    // console.log(pet);
    if (pet.length > longestPet.length) {
      longestPet = pet;
    }
  });
  return longestPet;
}

//always remember to invoke the functions
// console.log(findPetWithLongestName(ourPets));
// console.log(findPetWithLongestName(students));

//sum numbers in an array
const products = [45, 500, 10, 8];
const products2 = [5, 7, 12];

function sumProducts(arrayOfProducts) {
  let total = 0;

  arrayOfProducts.forEach((oneProduct) => {
    // console.log(oneProduct);
    total += oneProduct;
  });
  return total;
}

function averageProducts(products) {
  let total = sumProducts(products);
  return total / products.length;
}

// console.log(sumProducts(products));
// console.log(averageProducts(products));

//return in an array has a word in it
const students2 = [
  "Amir",
  "Roberto",
  "Rishi",
  "Maedeh",
  "Devon",
  ["Ragnar", "Luna", ["hello"]],
];
//function that will loop through an array and check if the array has a certain word
function checkIfStudentIsInArray(array, studentName) {
  //junior solution
  let isInsideArray = false;
  array.forEach((currentStudent) => {
    if (currentStudent === studentName) {
      isInsideArray = true;
    }
  });

  return isInsideArray;

  //oneliner solution
  //   return array.includes(studentName);
}

// console.log(checkIfStudentIsInArray(students2, "Maedeha"));
console.log(students2[5][2][0]);
