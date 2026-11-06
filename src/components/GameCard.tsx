import type { Game } from "../types/types";

type GameCardProps = {
    game: Game;
    showNotes?: boolean;
};

function GameCard({ game, showNotes = false}: GameCardProps) {
  return (
    <div>
    <h2>{game.title}</h2>
    <img src={game.coverUrl} alt={`${game.title} cover`} />
    <p>Platform: {game.platform}</p>
    <p>Status: {game.status}</p>
    <p>Rating: {game.rating}</p>
    {showNotes && (<p>Notes: {game.notes}</p>)}
    </div>
  )
}

export default GameCard