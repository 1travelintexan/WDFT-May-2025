const students = [
  { name: "Amir", location: "Germany", premium: true },
  { name: "Maedeh", location: "Netherlands", premium: false },
  { name: "Devon", location: "Netherlands", premium: true },
  { name: "Roberto", location: "Portugal", premium: false },
  { name: "Rishi", location: "Denmark", premium: true },
];
const numbers = [2, 555, 200, 62, 81, 4];
const cart = [
  { title: "Dog Bone", price: 20 },
  { title: "Dog Collar", price: 40 },
  { title: "Dog Treat", price: 20 },
  { title: "Dog Food", price: 20 },
  { title: "Dog Jacket", price: 60 },
];

//***************.map()**************/
//takes a callback function as an argument, and that function recieves the currentElement, currentIndex, wholeArray
const newArray = numbers.map((num, i) => {
  const newNumber = num * 3;
  return newNumber;
});

//list of prices
const arrayOfPrices = cart.map((item, index, wholeArray) => {
  return item.price;
});
const studentNames = students.map((student) => {
  return student.name;
});
const locations = students.map((x) => x.location);
// console.log(locations);

//******************.filter() **************/
//takes a callback function as an argument, and that function recieves the currentElement, currentIndex, wholeArray
const filteredCart = cart.filter((currentElement, currentIndex, wholeArray) => {
  if (currentElement.price <= 20) {
    return true;
  }
});
const filteredStudents = students
  .filter((student) => student.premium)
  .map((student) => student.name)
  .filter((student) => student.length <= 4);
console.log(filteredStudents);

//************.reduce() ************/
// takes two arguments, one is the callback function and then an inital value

const total = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);
//tricky things with reduce
const cartTotal = cart.reduce((acc, curr) => {
  if (curr.price) {
    return acc + curr.price;
  } else {
    return acc;
  }
}, 0);
// console.log(cartTotal);

// *****************.sort() *************
// console.log("numbers before:", numbers);
// numbers.sort((a, b) => {
//   if (a > b) {
//     return 44;
//   } else if (a < b) {
//     return -555;
//   } else {
//     return 0;
//   }
// });

//onliner version of sort
numbers.sort((a, b) => b - a);
// console.log("numbers after:", numbers);

//sorting the cart
// cart.sort((a, b) => {
//   if (a.price > b.price) {
//     return 1;
//   } else if (a.price < b.price) {
//     return -1;
//   } else {
//     return a.title.localeCompare(b.title);
//   }
// });
//oneliner version of .sort()
// cart.sort((a, b) => b.price - a.price);
// console.log(cart);
// const sortedCart = cart.toSorted((a, b) => a.price - b.price);
// console.log({ cart, sortedCart });

//.reverse()
const ourString = "Joshua";
// console.log(ourString.split(""));

console.log(ourString.split("").reverse().join("-"));
