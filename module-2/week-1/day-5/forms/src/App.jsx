import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { Pets } from "./pages/Pets";
import { AboutUs } from "./pages/AboutUs";
import { NotFound } from "./pages/NotFound";
import { PetDetail } from "./pages/PetDetail";
import petsData from "./assets/petsData.json";
import { AddPetPage } from "./pages/AddPetPage";
import { UpdatePetPage } from "./pages/UpdatePetPage";
function App() {
  const [petsArray, setPetsArray] = useState(petsData);
  function handleDeletePet(petId) {
    const filteredPets = petsArray.filter((onePet) => {
      if (onePet.id !== petId) {
        return true;
      }
    });
    setPetsArray(filteredPets);
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/pets"
          element={
            <Pets petsArray={petsArray} handleDeletePet={handleDeletePet} />
          }
        />
        <Route
          path="/pet-detail/:petId"
          element={<PetDetail petsArray={petsArray} />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/add-pet"
          element={
            <AddPetPage setPetsArray={setPetsArray} petsArray={petsArray} />
          }
        />
        <Route
          path="/update-pet/:petId"
          element={
            <UpdatePetPage petsArray={petsArray} setPetsArray={setPetsArray} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
