import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CharactersListPage } from "./pages/CharactersListPage";
import { CharacterDetailPage } from "./pages/CharacterDetailPage";
import { AllRecipes } from "./pages/AllRecipes";
import { RecipeDetailPage } from "./pages/RecipeDetailPage";

function App() {
  return (
    <>
      <h1>Use Effect Day</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-characters" element={<CharactersListPage />} />
        <Route
          path="/character-detail/:charId"
          element={<CharacterDetailPage />}
        />
        <Route path="/recipes" element={<AllRecipes />} />
        <Route path="/recipe-detail/:recipeId" element={<RecipeDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
