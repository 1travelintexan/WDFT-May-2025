import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharacterDetailPage = () => {
  const [oneChar, setOneChar] = useState({});
  const { charId } = useParams();

  useEffect(() => {
    //.then and .catch
    fetch(`https://rickandmortyapi.com/api/character/${charId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setOneChar(data);
      })
      .catch((err) => console.error(err));
  }, [charId]);

  return (
    <div>
      <h2>{oneChar.name}'s Page</h2>
      <img src={oneChar.image} alt={oneChar.name} />
      <h3>Species: {oneChar.species}</h3>
      <h3>Alive: {oneChar.status === "Alive" ? "🫶" : "💀"}</h3>
    </div>
  );
};
