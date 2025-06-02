const morningRoutine = ["wake up", "make coffee", "walk Ragnar", "Go to work"];

function sayHello(callback) {
  setTimeout(() => {
    console.log("hello");
    callback();
  }, 1000);
}
function sayGoodbye() {
  console.log("bye bye");
}

//calling the first function with a callback passed as an argument
// sayHello(sayGoodbye);

//function to get one item from the routine array
function getOneItem(index, succssfulCallback, errorCallback) {
  const theOneRoutine = morningRoutine[index];
  if (theOneRoutine) {
    setTimeout(() => {
      console.log(`Step ${index + 1}: ${theOneRoutine}`);
      succssfulCallback();
    }, 1000);
  } else {
    errorCallback(`Your step failed at index ${index}`);
  }
}

//pyramid of Doom

// getOneItem(
//   0,
//   () => {
//     getOneItem(
//       1111,
//       () => {
//         getOneItem(
//           2,
//           () => {
//             getOneItem(
//               3,
//               () => {
//                 console.log("Now go enjoy your day");
//               },
//               (error) => {
//                 console.log(error);
//               }
//             );
//           },
//           (err) => {
//             console.log(err);
//           }
//         );
//       },
//       (pizzaError) => {
//         console.log(pizzaError);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// ************************ Creating a Promise ************
let promiseKept = true;
const ourPromise = new Promise((resolve, reject) => {
  if (promiseKept) {
    resolve("the promise was successful");
  } else {
    reject("The promised failed for some reason, the promiseKept is false");
  }
});
const ourPromise2 = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve("the promise was successful the second time");
  } else {
    reject("The promised failed bc 2 + 2 does not equal 5");
  }
});
//*********************** Consuming a Promise with .then & .catch **********/
// ourPromise
//   .then((response) => {
//     console.log(response);
//     return ourPromise2;
//   })
//   .then((response2) => {
//     console.log(response2);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("this always runs after");
//   });

//******************Consuming a Promise with async and await **********/
//has to be wrapped in an asyncronous function
//syntax for asyncronous function with the function keyword
async function checkPromises() {
  try {
    const theResponse = await ourPromise;
    console.log(theResponse);
    const theSecondResponse = await ourPromise2;
    console.log(theSecondResponse);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("always the finally runs");
  }
}

//syntax for an arrow function
const checkPromises2 = async () => {
  try {
    const theResponse = await ourPromise;
    console.log(theResponse);
    const theSecondResponse = await ourPromise2;
    console.log(theSecondResponse);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("always the finally runs");
  }
};

//always make sure to call the function
// checkPromises();

// ************** promise.all() **************
//.then and .catch syntax
// Promise.all([ourPromise, ourPromise2])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//with async and await
// const promiseAllFunction = async () => {
//   try {
//     const arrayOfResponses = await Promise.all([ourPromise, ourPromise2]);
//     console.log(arrayOfResponses);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("just showing the finally");
//   }
// };
// promiseAllFunction();

//real world situation with promises
// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const arrayOfCharacters = data.results;
//     const newArrayOfCharacters = arrayOfCharacters.map((oneCharacter) => {
//       return {
//         name: oneCharacter.name,
//         image: oneCharacter.image,
//         species: oneCharacter.species,
//       };
//     });
//     console.log(newArrayOfCharacters);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//**************asking API for data with async and await *****/
async function getCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const newArrayOfCharacters = data.results.map((oneCharacter) => {
      return {
        name: oneCharacter.name,
        image: oneCharacter.image,
        species: oneCharacter.species,
      };
    });
    console.log(newArrayOfCharacters);
  } catch (error) {
    console.log(error);
  }
}
getCharacters();
