import { useParams } from "react-router-dom";

export const PetDetail = ({ petsArray }) => {
  const { petId } = useParams();
  const foundPet = petsArray.find((onePet) => {
    if (onePet.id == petId) {
      return true;
    }
  });
  console.log(foundPet);
  return (
    <div>
      <h2>{foundPet.name}'s Details Page</h2>
      <img
        src={foundPet.image}
        alt={foundPet.name}
        style={{ height: "60vh" }}
      />
      <h2>Age: {foundPet.age}</h2>
      <h2>Type: {foundPet.type}</h2>
      <h2>Premium: {foundPet.premium ? "🍩" : "🥦"}</h2>
    </div>
  );
};
