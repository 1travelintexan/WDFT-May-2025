import { useContext } from "react";
import logo from "../assets/logo.png";
import { AuthContext } from "../../contexts/AuthContext";
export const Navbar = () => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <nav>
      <img src={logo} alt="logo" />
      <h2>Our Navbar</h2>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};
