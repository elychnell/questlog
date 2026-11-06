import { useEffect, useState } from "react";
import type { Game } from "../types/types";


function useGame(id: string | undefined) {
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
  if (error instanceof Error && error.message.includes('404')) {
    setError(`Spelet kunde inte hittas.
      Det kan ha tagits bort eller så är länken ogiltig.
      ${error.message}`);
  } else {
    setError(`Något gick fel när spelet skulle hämtas.
    ${error instanceof Error ? error.message : 'Okänt fel'}`);
  }
  } finally {
    setIsLoading(false);
  }
};
  fetchGame();
}, [id]);
  return { game, isLoading, error };
}

export default useGame;

