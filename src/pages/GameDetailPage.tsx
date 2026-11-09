import { Link, useNavigate, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { useDeleteGame } from "../hooks/useGames";
import GameCard from "../components/GameCard";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";

function GameDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { game, isLoading, error } = useGame(id);
  const { deleteGame, isDeleting, error:deleteError } = useDeleteGame(id);
  const navigate = useNavigate();
  
const handleDeleteGame = async () => {
  const confirmed = window.confirm("Are you sure you want to delete this game?");
  if (!confirmed) { return; }

  const isDeleted = await deleteGame();
  if (isDeleted) { navigate('/'); }
  };

  return (<section>
    <Link to="/" className="flex flex-row items-center gap-2">
      <ArrowLeft size={16} />
      <span>Back to games</span>
    </Link>
    <h1 className="font-bold text-center mt-4">Game details</h1>
    {isLoading && <p>Loading game details...</p>}
    {error && <p className="whitespace-pre-line">{error}</p>}
    {!isLoading && !error && !game && (<p>Game not found.</p>)}
    {!isLoading && !error && game && (
      <>
        <GameCard game={game} variant="detail" />
        <div className="flex flex-row items-center justify-center gap-4 mt-4">
        <Link to={`/games/${id}/edit`} className="text-blue-500 hover:underline flex flex-row items-center gap-2"><Pencil size={18} /><span>Edit Game</span></Link>
        <button
        className="flex flex-row items-center gap-2"
        onClick={handleDeleteGame}
        disabled={isDeleting}><Trash2 size={18} /><span>Delete Game</span></button>
        </div>
      </>
    )}
    {isDeleting && <p>Deleting game...</p>}
    {deleteError && <p className="text-red-500">{deleteError}</p>}
  </section>);
}

export default GameDetailPage;