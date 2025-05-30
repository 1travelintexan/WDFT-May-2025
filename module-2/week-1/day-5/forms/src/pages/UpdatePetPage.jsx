import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdatePetPage = ({ petsArray, setPetsArray }) => {
  const { petId } = useParams();
  const foundPet = petsArray.find((pet) => pet.id == petId);
  const [name, setName] = useState(foundPet.name);
  const [age, setAge] = useState(foundPet.age);
  const [type, setType] = useState(foundPet.type);
  const [image, setImage] = useState(foundPet.image);
  const [premium, setPremium] = useState(foundPet.premium);
  const nav = useNavigate();
  //functions
  function handleUpdatePet(event) {
    event.preventDefault();
    const updatedPetInfo = {
      id: petId,
      name,
      age,
      type,
      image,
      premium,
    };
    const newUpdatedPetsArray = petsArray.map((onePet) => {
      if (onePet.id == petId) {
        return updatedPetInfo;
      } else {
        return onePet;
      }
    });
    setPetsArray(newUpdatedPetsArray);
    nav("/pets");
  }
  return (
    <div>
      <h2>Update</h2>
      <form onSubmit={handleUpdatePet}>
        <label>
          Pet Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Pet Age:
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <label>
          Pet Type:
          <select onChange={(e) => setType(e.target.value)}>
            <option>--none--</option>
            <option value="Dog">Doggo</option>
            <option value="Cat">Meow Meow</option>
            <option value="Bird">Squakk!</option>
          </select>
        </label>
        <label>
          Pet Image:
          <input
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
        <label>
          Premium:
          <input
            type="checkbox"
            value={premium}
            checked={premium}
            onChange={(event) => setPremium(event.target.checked)}
          />
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};
