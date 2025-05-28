import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { PetCard } from "./components/PetCard";

//import data from the json file
import petsData from "./petsData.json";
import { Navbar } from "./components/Navbar";
function App() {
  //syntax for useState is const and destructure an array and that equals useState with the inital value inside ( )
  const [pets, setPets] = useState(petsData);
  const [count, setCount] = useState(0);
  //create your functions here
  function handleAddToCount() {
    console.log("clicked");
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function handleDelete(id) {
    const filteredArray = pets.filter((onePet) => {
      if (onePet.id !== id) {
        return true;
      }
    });
    setPets(filteredArray);
  }
  return (
    <>
      <Navbar />
      <main>
        <section id="sidebar">sidebar</section>
        <section id="content">
          <Counter
            count={count}
            handleAddToCount={handleAddToCount}
            setCount={setCount}
          />

          <h2>Pets:</h2>
          {pets.map((onePet) => {
            return (
              <PetCard {...onePet} key={onePet.id} deletePet={handleDelete} />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
