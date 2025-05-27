import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import PetList from "./components/PetList";

function App() {
  //this is javascript land
  const dogArray = [
    {
      name: "Ragnar",
      age: 4,
      owner: "Joshua",
    },
    {
      name: "Luna",
      age: 1,
      owner: "Rishi",
    },
    {
      name: "Rocky",
      age: 12,
      owner: "Roberto",
    },
    {
      name: "Buddy",
      age: 14,
      owner: "Joshua",
    },
    {
      name: "Reaper",
      age: 16,
      owner: "Joshua",
    },
  ];
  const catArray = [
    {
      name: "Norte",
      age: 10,
      owner: "Joshua",
    },
    {
      name: "Caviar",
      age: 12,
      owner: "Joshua",
    },
    {
      name: "Lucy",
      age: 100,
      owner: "Joshua",
    },
  ];
  //pretend we asked the DB for the current User that is logged in to our webpage
  const currentUser = {
    username: "Roberto",
    password: "1234",
    email: "roberto@roberto.com",
  };

  return (
    <>
      {/* calling a component */}
      <Navbar userOne={currentUser.username} />
      <main>
        {/* calling a component */}
        <PetList allPets={dogArray} type="Dog's" />
        {/* call the same petList component but send it the cats  */}
        <PetList allPets={catArray} type="Cats" />
      </main>
      {/* calling a component */}
      <Footer />
    </>
  );
}
export default App;
