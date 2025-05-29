import { Link } from "react-router-dom";

export const PetList = ({ pets }) => {
  return (
    <div>
      {pets.map((onePet) => {
        return (
          <Link to={`/pet-detail/${onePet.id}`} key={onePet.id}>
            <div className="pet-card">
              <h3>{onePet.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
