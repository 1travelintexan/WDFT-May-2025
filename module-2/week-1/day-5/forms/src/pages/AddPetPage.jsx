import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toast";
import { useNavigate } from "react-router-dom";
export const AddPetPage = ({ petsArray, setPetsArray }) => {
  const [petName, setPetName] = useState("");
  const [age, setAge] = useState(0);
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [premium, setPremium] = useState(false);
  const [newPet, setNewPet] = useState({
    id: uuidv4(),
    name: "",
    age: 0,
    type: "",
    image: "",
  });
  const nav = useNavigate();
  //toast variable
  const wave = () => toast("Pet added successfully! Nice work :)");
  //functions to handle the inputs
  function handleNameChange(event) {
    console.log("inside the handler function", event);
    setPetName(event.target.value);
  }
  function handleAddNewPet(event) {
    //stop the page from refreshing on submit of the form
    event.preventDefault();
    const petToAdd = {
      id: uuidv4(),
      name: petName,
      age,
      type,
      image,
      premium,
    };
    console.log(petToAdd);
    //this is for the normal example with many states
    setPetsArray([...petsArray, petToAdd]);
    //this is for one state example (advanced)
    // setPetsArray([...petsArray, newPet]);
    setAge(0);
    setImage("");
    setPetName("");
    setType("");
    //this calls the toast function to pop up
    wave();

    //navigate to another page after pet is added
    nav("/pets");
  }

  //generic function to change all states
  function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    setNewPet({ ...newPet, [key]: value });
  }
  return (
    <div>
      <ToastContainer />
      <h2>Add Pet</h2>
      <form onSubmit={handleAddNewPet}>
        <label>
          Pet Name:
          <input type="text" value={petName} onChange={handleNameChange} />
          {/* input with one state to control all input values  */}
          {/* <input type="text" name="name" onChange={handleChange} /> */}
        </label>
        <label>
          Pet Age:
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          {/* more advanced  */}
          {/* <input type="number" name="age" onChange={handleChange} /> */}
        </label>
        <label>
          Pet Type:
          <select onChange={(e) => setType(e.target.value)}>
            <option>--none--</option>
            <option value="Dog">Doggo</option>
            <option value="Cat">Meow Meow</option>
            <option value="Bird">Squakk!</option>
          </select>
          {/* more advanced  */}
          {/* <input type="text" name="type" onChange={handleChange} /> */}
        </label>
        <label>
          Pet Image:
          <input
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
          {/* more advanced  */}
          {/* <input type="text" name="image" onChange={handleChange} /> */}
        </label>
        <label>
          Premium:
          <input
            type="checkbox"
            value={premium}
            onChange={(event) => setPremium(event.target.checked)}
          />
          {/* more advanced  */}
          {/* <input type="text" name="image" onChange={handleChange} /> */}
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
