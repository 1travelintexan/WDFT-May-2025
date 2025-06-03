import { useEffect } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  useEffect(() => {
    console.log("on mount");

    //show when the component is destroyed
    return () => {
      console.log("when you leave the page");
    };
  }, []);
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/all-characters">Characters</Link>
      <Link to="/recipes">Recipes</Link>
    </div>
  );
};
