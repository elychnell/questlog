import FilterList from "../components/FilterList";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Filter, SortOption, SortOrder } from "../types/types";
import useGames from "../hooks/useGames";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import SortControl from "../components/SortControl";
import { useState } from "react";
import useSteamData from "../hooks/useSteamData";


function HomePage() {
const [activeFilter, setActiveFilter] = useLocalStorage<Filter>('gameFilter', 'all');
const { games, isLoading, error } = useGames(activeFilter);
const [sortBy, setSortBy] = useState<SortOption>("title");
const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
const { enrichGame } = useSteamData(games);
const enrichedGames = games.map(enrichGame);

const sortedGames = [...enrichedGames].sort((a, b) => {
let result: number = 0;
  if (sortBy === "title") {
  result = a.title.localeCompare(b.title);
}
  if (sortBy === "playtime") {
  if (a.playtime === null && b.playtime === null) return 0;
  if (a.playtime === null) return 1;
  if (b.playtime === null) return -1;

  result = a.playtime - b.playtime;
}
  if (sortBy === "platform") {
  result = a.platform.localeCompare(b.platform);
}
  if (sortBy === "rating") {
  result = (a.rating ?? 0) - (b.rating ?? 0);
}
  return sortOrder === "asc" ? result : -result;
});

  return (
  <section className="w-full min-w-0">
  <h2 className="text-2xl font-bold text-text mb-4 text-center">
    Games List
  </h2>
  <FilterList activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
  <SortControl sortBy={sortBy} setSortBy={setSortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} />
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4 min-w-0">
    {isLoading && <p>Loading games...</p>}
    {error && <p className="whitespace-pre-line">{error}</p>}
    {!isLoading && !error && games.length === 0 && <p>No games found.</p>}
    {!isLoading && !error && sortedGames.map((enrichedGame) => (
      <Link
      key={enrichedGame.id}
      to={`/games/${enrichedGame.id}`}
      className="block w-full min-w-0">
      <GameCard game={enrichedGame} />
      </Link>
    ))}
    </div>
  </section>
  );
}


export default HomePage;