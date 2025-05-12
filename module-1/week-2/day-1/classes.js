// create a class
// class is a reserved keyword and should start with a capital letter
class Pet {
  static numberOfPets = 0;
  constructor(name, age, isGood) {
    this.name = name;
    this.age = age;
    this.isGood = isGood;
    //static property
    this.toys = [];
    //add one to the static property of the number of pets
    Pet.numberOfPets++;
  }

  giveToy(aToy) {
    this.toys.push(aToy);
  }
  takeToyAway(toy) {
    const theIndexOfTheToy = this.toys.indexOf(toy);
    this.toys.splice(theIndexOfTheToy, 1);
  }
  birthday() {
    this.age++;
  }

  //method to display how many pets were created
  getNumberOfPets() {
    console.log(Pet.numberOfPets);
  }
}

//invoking or calling the class
// const pet1 = new Pet("Luna", 1, "bird");
// const pet2 = new Pet("Ragnar", 4, "dog", false);
const pet3 = new Pet("Buddy", 12, "dog");
// pet1.speak();
// pet2.speak();
// pet1.giveToy("chew toy");
// pet2.giveToy("ball");
// pet2.giveToy("rope");
// pet2.giveToy("treat");
// pet3.giveToy("bone");

//Ragnar is in trouble, I took his treat
// console.log("Before taking toy:", pet2);
// pet2.takeToyAway("treat");
// pet2.birthday();
// console.log({ pet1, pet2, pet3 });

//Extended class
class Dog extends Pet {
  //declare the private property above the constructor
  #owner;
  constructor(age, name, breed, isGood = true, owner) {
    super(name, age, isGood);
    this.type = "dog";
    this.breed = breed;
    //reassign the private property
    this.#owner = owner;
  }
  sayWoof() {
    console.log("woof woof");
  }
  walk() {
    console.log("go out on a leash");
  }
  getOwner() {
    console.log("The dog owner is: ", this.#owner);
  }
}

//bird class that extends pet class with the ability to fly around house

const Ragnar = new Dog(4, "Ragnar", "Pitbull", false, "Joshua");
// console.log("name", Ragnar.name);
// console.log("owner", Ragnar.owner);
Ragnar.getOwner();
class Bird extends Pet {
  constructor(name, age, isGood, color) {
    super(name, age, isGood);
    this.color = color;
  }
  goFly() {
    console.log("fly around ");
  }
  thisFunc() {
    console.log(this);
  }
}

const Luna = new Bird("Luna", 1, true, "grey & yellow");
const Kiwi = new Bird("Kiwi", 3, false, "Bright Green");
// Luna.goFly();
// Luna.giveToy("swing");
// console.log({ Luna, Ragnar, pet3 });
// Ragnar.getNumberOfPets();
// const newPet = new Dog(2, "Bowser", "mix", true);
// newPet.getNumberOfPets();

//console.log this freely in the file
console.log(this);

function testFunc() {
  console.log(this);
}
// testFunc();
const testFunc2 = () => {
  console.log("this in arrow", this);
};
// testFunc2();
// Luna.thisFunc();
// Kiwi.thisFunc();

const ourObject = {
  name: "Joshua",
  hello: function () {
    console.log(this);
  },
  world: () => {
    console.log(this);
  },
};
ourObject.hello();
ourObject.world();
