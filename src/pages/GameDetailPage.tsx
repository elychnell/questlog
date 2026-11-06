import { Link, useNavigate, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { useDeleteGame } from "../hooks/useGames";

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
    <h1>Game details</h1>
    {isLoading && <p>Loading game details...</p>}
    {error && <p>{error}</p>}
    {!isLoading && !error && !game && (<p>Game not found.</p>)}
    {!isLoading && !error && game && (
      <div>
        <h2>{game.title}</h2>
        <img src={game.coverUrl} alt={`${game.title} cover`} />
        <p>Platform: {game.platform}</p>
        <p>Status: {game.status}</p>
        <p>Rating: {game.rating}</p>
        <p>Notes: {game.notes}</p>
        <Link to={`/games/${id}/edit`} className="text-blue-500 hover:underline">Edit Game</Link>
        <button onClick={handleDeleteGame} disabled={isDeleting}>Delete Game</button>
      </div>
    )}
    {isDeleting && <p>Deleting game...</p>}
    {deleteError && <p className="text-red-500">{deleteError}</p>}
  </section>);
}

export default GameDetailPage;