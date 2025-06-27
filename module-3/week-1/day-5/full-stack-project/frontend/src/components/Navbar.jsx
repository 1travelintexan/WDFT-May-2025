import { useContext } from "react";
import logo from "../assets/logo.png";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <nav>
      <img src={logo} alt="logo" />
      <h2>Our Navbar</h2>
      <Link to="/map">See Map</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};
