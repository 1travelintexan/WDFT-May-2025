import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="ironhack logo" />
      <h1>Happy Friday</h1>
      <section>
        <Link to="/">Home</Link>
        <Link to="/pets">Pets</Link>
        <Link to="/about">About Us</Link>
        <Link to="/add-pet">Add Pet</Link>
      </section>
    </nav>
  );
};
