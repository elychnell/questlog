import { useEffect, useState } from "react";
import type { Game } from "../types/types";


function useQuest(id: string | undefined) {
const [game, setGame] = useState<Game | null>(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState('');

useEffect(() => {
if (!id) return;
const fetchGame = async () => {
setError('');
setIsLoading(true);
  try {
    const url = 'https://questlog-api.vercel.app/api/emil-l/games/' + id;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setGame(data);
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    } else { setError('An unknown error occurred'); }
  } finally {
    setIsLoading(false);
  }
};
  fetchGame();
}, [id]);
  return { game, isLoading, error };
}

export default useQuest;

