import { Link, NavLink } from "react-router-dom";
import ironhackLogo from "../assets/ironhack-logo.jpg";
export const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={ironhackLogo} alt="ironhack logo" className="logo" />
      </Link>
      <h1>Routing in React</h1>
      <section>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pets">Pets</NavLink>
        <NavLink to="/profile?pet-name=Ragnar">Profile</NavLink>
        <NavLink to="/about">About</NavLink>
      </section>
    </nav>
  );
};
