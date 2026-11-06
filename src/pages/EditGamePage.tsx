import GameForm from "../components/GameForm";
import { useUpdateGame } from "../hooks/useGames";
import useGame from "../hooks/useGame";
import { useNavigate, useParams } from "react-router-dom";
import type { GameFormData } from "../types/types";

function EditGamePage() {
  const { id } = useParams<{ id: string }>();
  const { updateGame, isSaving, error:updateError } = useUpdateGame(id);
  const { game, isLoading, error:fetchError } = useGame(id);
  
  const navigate = useNavigate();

  const handleUpdateGame = async (gameData: GameFormData) => {
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
  if (Object.keys(changedData).length === 0) {
  return;
}
console.log('PATCH payload:', changedData);
}
  const updatedGame = await updateGame(changedData);
  if (updatedGame) {
    setTimeout(() => {
    navigate(`/games/${updatedGame.id}`);
  }, 1000);
  }
  return updatedGame;
}
if (isLoading) return <p>Loading game...</p>;
if (fetchError) return <p>{fetchError}</p>;
if (!game) return <p>Game not found.</p>;
return (<section>
  <h1>Edit a game</h1>
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
    isSaving={isSaving}
    error={updateError}
    submitLabel="Update Game"
  />
  </section>);
}

export default EditGamePage;