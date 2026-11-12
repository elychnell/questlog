import GameForm from "../components/GameForm";
import { useSaveGame } from "../hooks/useGames";
import { Link, useNavigate } from "react-router-dom";
import type { GameFormData } from "../types/types";
import { ArrowLeft } from "lucide-react";
import useSteamData from "../hooks/useSteamData";
import { useState } from "react";

function NewGamePage() {

const [saveComplete, setSaveComplete] = useState(false);
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
  setSaveComplete(true);
    setTimeout(() => {
    navigate(`/games/${savedGame.id}`);
  }, 1250);
  }
  return savedGame;
}
return (
<section>
  <Link to="/" className="flex items-center gap-2 text-text-secondary transition-colors hover:text-primary">
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
  {saveComplete && <p className="text-center text-green-500 mt-2">Game saved successfully! Redirecting...</p>}
</section>
);
}

export default NewGamePage;