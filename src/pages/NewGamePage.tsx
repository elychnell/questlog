import GameForm from "../components/GameForm";
import { useSaveGame } from "../hooks/useGames";
import { useNavigate } from "react-router-dom";
import type { GameFormData } from "../types/types";

function NewGamePage() {

const { saveGame, isSaving, error } = useSaveGame();

const navigate = useNavigate();
const handleSaveGame = async (gameData: GameFormData) => {
  const savedGame = await saveGame(gameData);
  if (savedGame) {
    setTimeout(() => {
    navigate(`/games/${savedGame.id}`);
  }, 1000);
  }
  return savedGame;
}
  return (<section>
  <h1>Add a game</h1>
  <GameForm 
    onSave={handleSaveGame}
    isSaving={isSaving}
    error={error}
    submitLabel="Add Game"
  />
  </section>);
}

export default NewGamePage;