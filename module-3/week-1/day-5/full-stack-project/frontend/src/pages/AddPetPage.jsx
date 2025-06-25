import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddPetPage = () => {
  const [name, setName] = useState("");
  const nav = useNavigate();

  //function to add pet with token
  async function handleAddPet(e) {
    e.preventDefault();
    //this takes the image that was choosen from the input
    const theImage = e.target.image.files[0];
    //this creates a new object that is form data
    const ourFormData = new FormData();
    //these add properties to the new object that is form data
    ourFormData.append("imageUrl", theImage);
    ourFormData.append("name", name);
    const tokenInStorage = localStorage.getItem("authToken");
    try {
      await axios.post("http://localhost:5005/pets/add-pet", ourFormData, {
        headers: {
          authorization: `Bearer ${tokenInStorage}`,
        },
      });
      nav("/profile");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2>Add a New Pet</h2>
      <form onSubmit={handleAddPet}>
        <label>
          Pet Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Pet Image:
          <input type="file" name="image" />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
};
