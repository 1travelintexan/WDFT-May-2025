import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import NotFound from "./pages/NotFound";
import { ProfilePage } from "./pages/ProfilePage";
import { Signup } from "./pages/Signup";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AddPetPage } from "./pages/AddPetPage";
import MapComponent from "./components/MapComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-pet"
          element={
            <ProtectedRoute>
              <AddPetPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/map"
          element={
            <ProtectedRoute>
              <MapComponent />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
