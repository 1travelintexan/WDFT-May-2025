import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const RecipeDetailPage = () => {
  const [oneRec, setOneRec] = useState({});
  const { recipeId } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOneRec(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{oneRec.name}</h1>
      <img src={oneRec.image} alt={oneRec.name} style={{ width: "70vw" }} />
    </div>
  );
};
