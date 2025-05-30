import { Link } from "react-router-dom";
export const Pets = ({ petsArray, handleDeletePet }) => {
  return (
    <div>
      <h2>All the Pets:</h2>
      {petsArray.map((pet) => {
        return (
          <div className="pet-card" key={pet.id}>
            <Link to={`/pet-detail/${pet.id}`}>
              <h4>{pet.name}</h4>
            </Link>
            <button onClick={() => handleDeletePet(pet.id)}>Delete</button>
            <Link to={`/update-pet/${pet.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
