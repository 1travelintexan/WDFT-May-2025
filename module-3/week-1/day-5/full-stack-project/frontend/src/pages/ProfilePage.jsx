import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navbar } from "../components/Navbar";

export const ProfilePage = () => {
  const { currentUser, isLoading, isLoggedIn } = useContext(AuthContext);
  console.log(currentUser, isLoading, isLoggedIn);
  return (
    <div>
      <Navbar />
      <h3> {currentUser.username}'s Profile Page</h3>
    </div>
  );
};
