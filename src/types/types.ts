export type Game = {
  id: string;
  title: string;
  platform: string;
  status: Status;
  rating: number | null;
  coverUrl: string;
  notes: string;
};

export type Status = 'want' | 'playing' | 'completed' | 'dropped';

export type Filter = 'all' | Status;