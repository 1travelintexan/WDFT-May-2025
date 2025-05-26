import ragnarPicture from "./assets/ragnar.png";
import "./App.css";

function App() {
  //this is javascript land....
  const pet = {
    name: "Ragnar",
    age: 4,
    owner: "Joshua",
  };

  return (
    <>
      <h1>{pet.name}'s Page</h1>
      <section className="first-section">
        <img src={ragnarPicture} alt="ragnars pic" />
        <h3>Ragnar & me</h3>
      </section>
    </>
  );
}

export default App;
