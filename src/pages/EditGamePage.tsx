import GameForm from "../components/GameForm";
import { useUpdateGame } from "../hooks/useGames";
import useGame from "../hooks/useGame";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { GameFormData } from "../types/types";
import { ArrowLeft } from "lucide-react";
import useSteamData from "../hooks/useSteamData";

function EditGamePage() {
  const { id } = useParams<{ id: string }>();
  const { updateGame, isSaving, error:updateError } = useUpdateGame(id);
  const { game, isLoading, error:fetchError } = useGame(id);
  const { setManualPlaytimes, enrichGame } = useSteamData(game ? [game] : []);
  const enrichedGame = game ? enrichGame(game) : null;
  const navigate = useNavigate();

  const handleUpdateGame = async (gameData: GameFormData, playtime: number | null) => {
  if (!game) return undefined;
  const changedData: Partial<GameFormData> = {};
     console.log('Original game:', game);
     console.log('New game data:', gameData);

  if (game) {
  if (gameData.title !== game.title) {
  changedData.title = gameData.title;
  }
  if (gameData.coverUrl !== game.coverUrl) {
  changedData.coverUrl = gameData.coverUrl;
  }
  if (gameData.platform !== game.platform) {
  changedData.platform = gameData.platform;
  }
  if (gameData.status !== game.status) {
  changedData.status = gameData.status;
  }
  if (gameData.rating !== game.rating) {
  changedData.rating = gameData.rating;
  }
  if (gameData.notes !== game.notes) {
  changedData.notes = gameData.notes;
  }
  console.log('PATCH payload:', changedData);
  }
  let updatedGame = game;

  if (Object.keys(changedData).length > 0) {
  const result = await updateGame(changedData);

  if (!result) return undefined;

  updatedGame = result;
  }

  setManualPlaytimes((prev) => {
  const updated = { ...prev };

  if (playtime === null) {
    delete updated[game.id];
  } else {
    updated[game.id] = playtime;
  }

  return updated;
  });

setTimeout(() => {
  navigate(`/games/${updatedGame.id}`);
}, 1000);

return updatedGame;
}

if (isLoading) return <p>Loading game...</p>;
if (fetchError) return <p className="whitespace-pre-line">{fetchError}</p>;
if (!game) return <p>Game not found.</p>;
return (
<section>
  <Link to={`/games/${game.id}`} className="flex items-center gap-2 text-text-secondary transition-colors hover:text-primary">
      <ArrowLeft size={16} />
      <span>Back to game</span>
  </Link>
  <h1 className="font-bold text-center mt-0.25">Edit a game</h1>
  <GameForm
    onSave={handleUpdateGame}
    initialData={{
    title: game.title,
    platform: game.platform,
    status: game.status,
    rating: game.rating,
    coverUrl: game.coverUrl,
    notes: game.notes
    }}
    initialPlaytime={enrichedGame?.playtime ?? null}
    isSaving={isSaving}
    error={updateError}
    submitLabel="Update Game"
  />
</section>
);
}

export default EditGamePage;