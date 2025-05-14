const headerElement = document.querySelector("h1");
//button element with the id of spin
const spinButtonElement = document.querySelector("#spin-btn");
const stopSpinButtonElement = document.querySelector("#stop-spin-btn");
const hideButtonElement = document.getElementById("hide-image-btn");
const RagnarImageElement = document.querySelector("img");
//grab the pets container
const petsContainerElement = document.getElementById("pet-container");
//modifying the text in a tag
headerElement.innerText = "Hello World";
//modifying the style
headerElement.style.color = "blue";
headerElement.style.backgroundColor = "#827e04";

const pets = [
  {
    name: "Ragnar",
    age: 4,
  },
  {
    name: "Luna",
    age: 1,
  },
  {
    name: "Buddy",
    age: 12,
  },
  {
    name: "Rocky Balboa",
    age: 13,
  },
  {
    name: "Sadie",
    age: 5,
  },
];

//using a loop to create dynamic elements
pets.forEach((onePet) => {
  //first create an element
  const ourSection = document.createElement("section");
  //add class to section just for styles
  ourSection.classList.add("pet-card");
  ourSection.innerHTML = `
  <h2>Name:${onePet.name}</h2>
  <h3>Age:${onePet.age}</h3>
  <button class='like-btn'>Like</button>
  <button class='delete-btn'>Delete</button>
  `;

  //add the section to the DOM of to the page
  petsContainerElement.appendChild(ourSection);

  // this is for the like button
  let petLiked = false;
  //inside the loop... we add an event listener to each button
  const likeBtn = ourSection.querySelector(".like-btn");
  likeBtn.addEventListener("click", () => {
    console.log("like clicked");
    ourSection.classList.toggle("liked");
    if (!petLiked) {
      likeBtn.innerText = "Un-Like";
      petLiked = true;
    } else {
      likeBtn.innerText = "Like";
      petLiked = false;
    }
  });

  //for the delete button for each pet
  const delteBtn = ourSection.querySelector(".delete-btn");
  delteBtn.addEventListener("click", () => {
    ourSection.remove();
    // ourSection.style.display = "none";
  });
});

//
// Put the event listeners at the bottom
//making something 'clickable' via JS
spinButtonElement.addEventListener("click", () => {
  console.log("clicked!", RagnarImageElement.classList);
  //changes the color of the button
  spinButtonElement.style.backgroundColor = "blue";
  //adds a class of spin to the image of Ragnar
  RagnarImageElement.classList.add("spin");
});
stopSpinButtonElement.addEventListener("click", () => {
  RagnarImageElement.classList.remove("spin");
  spinButtonElement.style.backgroundColor = "";
});
hideButtonElement.addEventListener("click", () => {
  RagnarImageElement.classList.toggle("hide");
  const theText = hideButtonElement.innerText;
  if (theText === "Hide Image") {
    hideButtonElement.innerText = "Show Image";
  } else {
    hideButtonElement.innerText = "Hide Image";
  }
});

//this is an example of creating an element and adding it
//create a section to add to the pets container
// //createElement is actually creating the element
// const petSection = document.createElement("section");
// petSection.innerHTML = `
// <h2>Name: Ragnar</h2>
// <h3>age: 4</h3>`;

// //add a class to the section
// petSection.classList.add("pet-card");
// //to add the new element to the DOM, we use the appendChild
// petsContainerElement.appendChild(petSection);
// //create a section to add to the pets container
// //createElement is actually creating the element
// const petSection2 = document.createElement("section");
// petSection2.innerHTML = `
// <h2>Name: Luna</h2>
// <h3>age: 1</h3>`;

// //add a class to the section
// petSection2.classList.add("pet-card");
// //to add the new element to the DOM, we use the appendChild
// petsContainerElement.appendChild(petSection2);
