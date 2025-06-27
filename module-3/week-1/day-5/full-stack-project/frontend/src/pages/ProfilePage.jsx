import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

//these are the imports for the modal
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ProfilePage = () => {
  const [pets, setPets] = useState([]);
  const { currentUser } = useContext(AuthContext);

  //state to control if the modal is open
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <h3>{currentUser && currentUser.username}'s Profile Page</h3>
      <Link to="/add-pet">Add Pet</Link>
      {/* this is the modal  */}
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      {/* this is the end of the modal  */}
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
