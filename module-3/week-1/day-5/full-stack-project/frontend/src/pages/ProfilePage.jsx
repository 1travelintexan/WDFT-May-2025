import { useContext, useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

export const ProfilePage = () => {
  const [pets, setPets] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const tokenInStorage = localStorage.getItem("authToken");
    axios
      .get("http://localhost:5005/pets/user-pets", {
        headers: {
          authorization: `Bearer ${tokenInStorage}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPets(res.data.pets);
      })
      .catch((err) => console.log(err));
  }, []);

  //function to remove pet
  async function handleRemovePet(petId) {
    const tokenInStorage = localStorage.getItem("authToken");
    axios
      .delete(`http://localhost:5005/pets/delete-pet/${petId}`, {
        headers: { authorization: `Bearer ${tokenInStorage}` },
      })
      .then((res) => {
        console.log(res.data);
        setPets(res.data.pets);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Navbar />
      <h3>{currentUser && currentUser.username}'s Profile Page</h3>
      <Link to="/add-pet">Add Pet</Link>
      <h3>Pets:</h3>
      {pets.map((onePet) => {
        return (
          <div key={onePet._id} className="pet-card">
            <img
              src={onePet.image}
              alt="pet image"
              style={{ height: " 100px" }}
            />
            <h4>Pet Name: {onePet.name}</h4>
            <button onClick={() => handleRemovePet(onePet._id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};
