import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CharactersListPage = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function getAllCharacters() {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        console.log(data);
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getAllCharacters();
  }, []);

  return (
    <div>
      <h2>Characters List</h2>
      {characters.map((oneChar) => {
        return (
          <div key={oneChar.id}>
            <img src={oneChar.image} alt={oneChar.name} />
            <Link to={`/character-detail/${oneChar.id}`}>
              <h3>{oneChar.name}</h3>;
            </Link>
          </div>
        );
      })}
    </div>
  );
};
