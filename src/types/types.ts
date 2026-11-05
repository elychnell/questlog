export type Game = {
  id: string;
  title: string;
  platform: string;
  status: string;
  rating: number;
  coverUrl: string;
  notes: string;
};

export type Filter = 'all' | 'want' | 'playing' | 'completed' | 'dropped';