import useLocalStorage from "./useLocalStorage";
import type { SteamSnapshot, SteamMatches, Game, GameWithPlaytime } from "../types/types";
import matchSteamGames from "../utils/matchSteamGames";
import { useEffect } from "react";

function useSteamData(games: Game[]) {

  const [steamSnapshot, setSteamSnapshot] =
    useLocalStorage<SteamSnapshot | null>("steamSnapshot", null);

  const [steamMatches, setSteamMatches] =
    useLocalStorage<SteamMatches>("steamMatches", {});

  useEffect(() => {
  if (!steamSnapshot) return;

  const newMatches = matchSteamGames(games, steamSnapshot.games);
  setSteamMatches(newMatches);
}, [games, steamSnapshot, setSteamMatches]);


const enrichGame = (game: Game): GameWithPlaytime => {
  return {
    ...game,
    playtime: steamMatches[game.id]?.playtime ?? null,
  };
};

  return {
    steamSnapshot,
    setSteamSnapshot,
    steamMatches,
    enrichGame,
  };
}

export default useSteamData;