import { useState } from "react";
import { useParams } from "react-router-dom";

export const PetDetail = ({ pets }) => {
  //grabbing the id from the URL
  const { petId } = useParams();
  const thePet = pets.find((onePet) => onePet.id == petId);
  const [pet, setPet] = useState(thePet);
  return (
    <div>
      <h2>{pet.name}'s Page</h2>
      <img src={pet.image} alt={pet.name} className="detail-image" />
      <h3>Age: {pet.age}</h3>
      <h3>Pet Type: {pet.type} </h3>
    </div>
  );
};
