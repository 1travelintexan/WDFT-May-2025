import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import NotFound from "./pages/NotFound";
import { ProfilePage } from "./pages/ProfilePage";
import { Signup } from "./pages/Signup";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AddPetPage } from "./pages/AddPetPage";
import MapComponent from "./components/MapComponent";
import OutletComponent from "./components/OutletComponent";

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
              <OutletComponent>
                <ProfilePage />
              </OutletComponent>
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-pet"
          element={
            <ProtectedRoute>
              <OutletComponent>
                <AddPetPage />
              </OutletComponent>
            </ProtectedRoute>
          }
        />
        <Route
          path="/map"
          element={
            <ProtectedRoute>
              <OutletComponent>
                <MapComponent />
              </OutletComponent>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
