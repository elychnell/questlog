import FilterList from "../components/FilterList";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Filter } from "../types/types";
import useQuests from "../hooks/useQuests";
import { Link } from "react-router-dom";

function HomePage() {
const [activeFilter, setActiveFilter] = useLocalStorage<Filter>('gameFilter', 'all');
const { games, isLoading, error } = useQuests(activeFilter);

  return (
  <section>
  <h2 className="text-2xl font-bold text-text mb-4 text-center">
    Games List
  </h2>
  <FilterList activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
  <div className="flex justify-center flex-col gap-2 mt-4">
    {isLoading && <p>Loading games...</p>}
    {error && <p>{error}</p>}
    {!isLoading && !error && games.length === 0 && <p>No games found.</p>}
    {!isLoading && !error && games.map((game) => (
      <Link to={`/games/${game.id}`}>
      <div key={game.id} className="flex flex-col items-center border border-surface-secondary py-4">
        <h3 className="text-lg font-semibold text-text max-w-[10em] text-center">{game.title}</h3>
        <img src={game.coverUrl} alt={`${game.title} cover`} className="w-32 h-auto my-2" />
        <p className="text-sm text-text-secondary">Platform: {game.platform}</p>
        <p className="text-sm text-text-secondary">Status: {game.status}</p>
        <p className="text-sm text-text-secondary">Rating: {game.rating}</p>
      </div>
      </Link>
    ))}
    </div>
  </section>
  );
}


export default HomePage;