import { useEffect, useState } from "react";
import type { Filter, Game } from "../types/types";

function useQuests(activeFilter: Filter) {
const [games, setGames] = useState<Game[]>([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState('');

useEffect(() => {
const fetchGames = async () => {
setError('');
setIsLoading(true);
  try {
    const url = activeFilter === 'all'
    ? 'https://questlog-api.vercel.app/api/emil-l/games'
    : `https://questlog-api.vercel.app/api/emil-l/games?status=${activeFilter}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setGames(data);
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    } else { setError('An unknown error occurred'); }
  } finally {
    setIsLoading(false);
  }
};
  fetchGames();
}, [activeFilter]);
  return { games, isLoading, error };
}

export default useQuests;

