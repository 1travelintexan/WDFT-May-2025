const PetCard = (props) => {
  console.log("petcard", props);
  return (
    <div className="pet-card">
      <h2>Name: {props.onePet?.name}</h2>
      <h2>Age: {props.onePet?.age}</h2>
      <h2>Owner: {props.onePet?.owner}</h2>
    </div>
  );
};
export default PetCard;
