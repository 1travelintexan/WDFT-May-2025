import PetCard from "./PetCard";

const PetList = ({ allPets, type }) => {
  console.log("here are the props to the Pet List: ");
  return (
    <div>
      <h1>{type}</h1>
      {allPets.map((pet) => {
        return <PetCard onePet={pet} />;
      })}
      {/* <PetCard onePet={allPets[0]} />
      <PetCard onePet={allPets[1]} />
      <PetCard onePet={allPets[2]} /> */}
    </div>
  );
};
export default PetList;
