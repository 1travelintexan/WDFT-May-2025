export const PetCard = ({ id, name, age, type, premium, deletePet }) => {
  return (
    <div className="pet-card">
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      {/* ternary example  */}
      <h4>Type: {type === "Dog" ? "🐩" : type === "Cat" ? "😾" : "🦚"}</h4>
      <h4>Premium User: {premium && "🏆"}</h4>
      <button onClick={() => deletePet(id)}>Delete</button>
    </div>
  );
};
