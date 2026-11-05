import GameForm from "../components/GameForm";
import { useUpdateGame } from "../hooks/useQuests";
import useQuest from "../hooks/useQuest";
import { useNavigate, useParams } from "react-router-dom";
import type { GameFormData } from "../types/types";

function EditGamePage() {
  const { id } = useParams<{ id: string }>();
  const { updateGame, isSaving, error } = useUpdateGame(id);
  const { game } = useQuest(id);

const navigate = useNavigate();

  const handleUpdateGame = async (gameData: GameFormData) => {
    const updatedGame = await updateGame(gameData);
  if (updatedGame) {
    setTimeout(() => {
    navigate(`/games/${updatedGame.id}`);
  }, 1000);
  }
  return updatedGame;
}
if (isSaving) return <p>Loading game...</p>;
if (error) return <p>{error}</p>;
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
    error={error}
    submitLabel="Update Game"
  />
  </section>);
}

export default EditGamePage;