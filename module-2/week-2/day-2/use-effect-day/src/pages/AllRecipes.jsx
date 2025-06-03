import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.recipes);
        setRecipes(data.recipes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="recipes-container">
      {recipes &&
        recipes.map((oneRecipe) => {
          return (
            <div key={oneRecipe.id} className="recipe-card">
              <img src={oneRecipe.image} alt="{oneRecipe.name}" />
              <Link to={`/recipe-detail/${oneRecipe.id}`}>
                <h4>{oneRecipe.name}</h4>
              </Link>
            </div>
          );
        })}
    </div>
  );
};
