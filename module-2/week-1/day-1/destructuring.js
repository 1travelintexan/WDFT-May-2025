const pet = {
  name: "Ragnar",
  age: 4,
  owner: "Joshua",
  toys: ["ball", "bone"],
};
//destructuring an object
const { age, name, owner } = pet;

//destructuring an array
const students = ["Rishi", "Amir", "Maedeh", "Roberto", "Devon"];
const [_, student2, ...restOfStudents] = students;
console.log(restOfStudents);
