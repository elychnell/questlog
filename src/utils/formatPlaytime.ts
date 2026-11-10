export const formatPlaytime = (playtime: number | null) => {
  if (playtime === null) return "No playtime data";

  const hours = Math.floor(playtime / 60);
  const minutes = playtime % 60;
  
  if (hours === 0) return `${minutes}m`;
  return `${hours}h ${minutes > 0 ? `${minutes}m` : ''}`;
};