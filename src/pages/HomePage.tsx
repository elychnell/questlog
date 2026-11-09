import FilterList from "../components/FilterList";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Filter } from "../types/types";
import useGames from "../hooks/useGames";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";

function HomePage() {
const [activeFilter, setActiveFilter] = useLocalStorage<Filter>('gameFilter', 'all');
const { games, isLoading, error } = useGames(activeFilter);

  return (
  <section>
  <h2 className="text-2xl font-bold text-text mb-4 text-center">
    Games List
  </h2>
  <FilterList activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4">
    {isLoading && <p>Loading games...</p>}
    {error && <p className="whitespace-pre-line">{error}</p>}
    {!isLoading && !error && games.length === 0 && <p>No games found.</p>}
    {!isLoading && !error && games.map((game) => (
      <Link key={game.id} to={`/games/${game.id}`}>
        <GameCard game={game} />
      </Link>
    ))}
    </div>
  </section>
  );
}


export default HomePage;