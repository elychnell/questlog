export type Game = {
  id: string;
  title: string;
  platform: string;
  status: Status;
  rating: number | null;
  coverUrl: string;
  notes: string;
};

export type GameWithPlaytime = Game & {
  playtime: number | null;
};

export type SteamGameData = {
  appId: number;
  title: string;
  playtime: number; // minuter
};

export type SteamSnapshot = {
  importedAt: string;
  games: SteamGameData[];
};

export type SteamGameMatch = {
  steamAppId: number;
  playtime: number;
};

export type SteamMatches = Record<string, SteamGameMatch>;

export type Status = 'want' | 'playing' | 'completed' | 'dropped';
export type SortOption = "title" | "playtime" | "platform" | "rating";
export type SortOrder = "asc" | "desc";
export type Filter = 'all' | Status;

export type GameFormData = Omit<Game, 'id'>;