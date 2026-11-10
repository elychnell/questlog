import useLocalStorage from "./useLocalStorage";
import type { Game, GameWithPlaytime, ManualPlaytime } from "../types/types";
import matchSteamGames from "../utils/matchSteamGames";
import steamLibrary from "../data/steamLibrary.json";

function useSteamData(games: Game[]) {
  const [manualPlaytimes, setManualPlaytimes] =
    useLocalStorage<ManualPlaytime>("manualPlaytimes", {});

  const steamMatches = matchSteamGames(games, steamLibrary);

  const enrichGame = (game: Game): GameWithPlaytime => ({
    ...game,
    playtime:
      manualPlaytimes[game.id] ??
      steamMatches[game.id]?.playtime ??
      null,
  });

  return {
    manualPlaytimes,
    setManualPlaytimes,
    steamMatches,
    enrichGame,
  };
}

export default useSteamData;