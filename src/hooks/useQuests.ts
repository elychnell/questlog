import { useEffect, useState } from "react";
import type { Filter, Game, GameFormData } from "../types/types";

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

export function useSaveGame() {
    
const [game, setGame] = useState<Game | null>(null);
const [isSaving, setIsSaving] = useState(false);
const [error, setError] = useState('');
  
const saveGame = async (gameData: GameFormData) => {
setError('');
setIsSaving(true);
  try {
    const url ='https://questlog-api.vercel.app/api/emil-l/games';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setGame(data)
    return data;
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    } else { setError('An unknown error occurred'); }
  } finally {
    setIsSaving(false);
  }
};

  return { game, isSaving, error, saveGame };
}

export function useUpdateGame(id: string | undefined) {

const [game, setGame] = useState<Game | null>(null);
const [isSaving, setIsSaving] = useState(false);
const [error, setError] = useState('');
  
const updateGame = async (gameData: GameFormData): Promise<Game | undefined> => {
setError('');
if (!id) {
  setError('Game ID is missing');
  return;
}
setIsSaving(true);
  try {
    const url ='https://questlog-api.vercel.app/api/emil-l/games/' + id;
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setGame(data)
    return data;
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    } else { setError('An unknown error occurred'); }
  } finally {
    setIsSaving(false);
  }
};

  return { game, isSaving, error, updateGame };
}