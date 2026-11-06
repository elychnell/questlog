import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useGame from "../hooks/useGame";

function GameDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { game, isLoading, error } = useGame(id);

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
      </div>
    )}
    <Link to={`/games/${id}/edit`} className="text-blue-500 hover:underline">
      Edit Game
    </Link>
  </section>);
}

export default GameDetailPage;