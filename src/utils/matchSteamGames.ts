import type { Game, SteamGameData, SteamGameMatch } from "../types/types";

function normalizeTitle(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function matchSteamGames(games: Game[], steamGames: SteamGameData[]): Record<string, SteamGameMatch> {
  const matches: Record<string, SteamGameMatch> = {};

  games.forEach((game) => {
    const match = steamGames.find((steamGame) =>
    normalizeTitle(steamGame.title) === normalizeTitle(game.title)
    );

    if (match) {
      matches[game.id] = {
        steamAppId: match.appId,
        playtime: match.playtime,
      };
    }
  });

  return matches;
}

export default matchSteamGames;