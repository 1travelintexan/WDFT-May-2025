const pet = {
  "pet name": "Ragnar",
  age: 4,
  owner: {
    ownerName: "Joshua",
    email: "joshua@joshua.com",
  },
  toys: ["ball", "bone"],
  bark: () => {
    console.log("woof woof");
  },
};
const pets = [
  {
    "pet name": "Ragnar",
    age: 4,
    owner: {
      ownerName: "Joshua",
      email: "joshua@joshua.com",
    },
    toys: ["ball", "bone"],
    bark: () => {
      console.log("woof woof");
    },
  },
  {
    "pet name": "Luna",
    age: 1,
    owner: {
      ownerName: "Rishi",
      email: "rishi@rishi.com",
    },
    toys: ["bell", "rope"],
  },
  {
    "pet name": "Buddy",
    age: 12,
    owner: {
      ownerName: "Joshua",
      email: "joshua@joshua.com",
    },
    toys: ["ball", "rope"],
    bark: () => {
      console.log("woof woof");
    },
  },
];
//calling a method inside an object
pet.bark();

//accessing properties in the object
//the dot notation .
// console.log(pet.name);
//the square brackets notations [ ]
const test = "age";
// console.log(pet.test);
// console.log(pet[test]);

//accessing nested objects
// console.log(pet.owner.ownerName);
//pushing to a nested array in an object
pet.toys.push("rope");

// delete a property from an object
// delete pet.age;
//reassign the value of a property
pet.age = pet.age + 1;
pet.isAGoodBoy = true;

const isFriendsInPet = "friends" in pet;
const isAgeInPet = "age" in pet;
// console.log(isFriendsInPet, isAgeInPet, pet);

//make an array of all of the keys
const theKeys = Object.keys(pet);
// console.log(theKeys);
//make an array of all of the values
const theValues = Object.values(pet);
// console.log(theValues);

//**********loop over an object *******/
// for (key in pet) {
//   //how to access a key inside the for in loop
//   //   console.log(key);
//   //how to access a value inside the for in loop
//   //   console.log(pet[key]);
// }

//functions using objects
//fuction to return a string that takes an object as an argument
//and returns the string 'Hello I am NAME and I am AGE years old and my owner is OWNER'
function petDetails(thePet) {
  //   return (
  //     "Hello I am " +
  //     thePet["pet name"] +
  //     " and I am " +
  //     thePet.age +
  //     " and my owner is " +
  //     thePet.owner.ownerName
  //   );
  return `Hello I am ${thePet["pet name"]} and I am ${thePet.age} years old and my owner is ${thePet.owner.ownerName}`;
}
// console.log(petDetails(pets[0]));
function removeAgesFromPets(arrayOfPets) {
  arrayOfPets.forEach((onePet) => {
    delete onePet.age;
  });
  return arrayOfPets;
}
// console.log(removeAgesFromPets(pets));

function givePetsWater(arrayOfPets) {
  arrayOfPets.forEach((onePet) => {
    onePet.giveWater = () => {
      console.log("pet is drinking water");
    };
  });
  return arrayOfPets;
}

// console.log(givePetsWater(pets));

// console.log([1, 2, 3] === [1, 2, 3]);
