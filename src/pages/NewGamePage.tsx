import GameForm from "../components/GameForm";
import { useSaveGame } from "../hooks/useGames";
import { Link, useNavigate } from "react-router-dom";
import type { GameFormData } from "../types/types";
import { ArrowLeft } from "lucide-react";
import useSteamData from "../hooks/useSteamData";

function NewGamePage() {

const { saveGame, isSaving, error } = useSaveGame();
const { setManualPlaytimes } = useSteamData([]);

const navigate = useNavigate();

const handleSaveGame = async (gameData: GameFormData, playtime: number | null) => {
  const savedGame = await saveGame(gameData);
  
  if (savedGame) {
    if (playtime !== null) {
      setManualPlaytimes((prev) => ({
        ...prev,
        [savedGame.id]: playtime,
      }));
    }

    setTimeout(() => {
    navigate(`/games/${savedGame.id}`);
  }, 1000);
  }
  return savedGame;
}
return (
<section>
  <Link to="/" className="flex flex-row items-center gap-2">
    <ArrowLeft size={16} />
    <span>Back to games</span>
  </Link>
  <h1 className="font-bold text-center mt-0.25">Add a game</h1>
  <GameForm 
    onSave={handleSaveGame}
    isSaving={isSaving}
    error={error}
    submitLabel="Add Game"
  />
</section>
);
}

export default NewGamePage;