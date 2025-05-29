import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useState } from "react";
import petsData from "./assets/petsData.json";
import { PetList } from "./pages/PetList";
import { PetDetail } from "./pages/PetDetail";
function App() {
  const [pets, setPets] = useState(petsData);
  return (
    <>
      <Navbar />
      {/* define each single route inside the routes with an s tag  */}
      <main>
        <Routes>
          {/* the route singular needs two things, the path to match and the component to show  */}
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pets" element={<PetList pets={pets} />} />
          {/* Dynamic route example  */}
          <Route
            path="/pet-detail/:petId"
            element={<PetDetail pets={pets} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
