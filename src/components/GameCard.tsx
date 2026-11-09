import type { Game } from "../types/types";
import placeholderBox from "../assets/placeholderBox.webp";
import { Gamepad2, Monitor, Laptop, Smartphone } from "lucide-react";

type GameCardProps = {
    game: Game;
    variant?: 'list' | 'detail';
};

function GameCard({ game, variant = 'list' }: GameCardProps) {

if (variant === 'detail') {
    return (
    <div className="flex flex-col items-center gap-4 bg-surface border border-surface-secondary rounded-lg p-4 max-w-[300px]">
    <h2 className="text-2xl font-bold">{game.title}</h2>
    <img
    className="w-48 h-auto mr-4"
    src={game.coverUrl === null ? placeholderBox : game.coverUrl}
    alt={`${game.title} cover`} />
    <p>Platform: {game.platform}</p>
    <p>Status: {game.status}</p>
    {game.rating === null ? (<div className="flex flex-col items-center gap-1">
      <p className="text-text-secondary text-sm">Rating</p>
      <p className="text-2xl">Not rated</p>
      </div>) : (
    <div className="flex flex-col items-center gap-1">
    <span className="text-text-secondary text-sm">Rating</span>
    <p className="text-yellow-400 text-3xl tracking-wide">
    {'★'.repeat(game.rating)}
    {'☆'.repeat(5 - game.rating)}
    </p>
    </div>
    )}
    <p>Notes: {game.notes}</p>
    </div>
    );
  }

const titleLength = game.title.length;

const titleSize =
titleLength > 30 ? "text-base" :
titleLength > 20 ? "text-lg" :
"text-2xl";

const platform = game.platform.toLowerCase();

const platformIcon =
  platform.includes("pc") ||
  platform.includes("windows") ||
  platform.includes("linux")
    ? <Monitor size={16} />
    : platform.includes("playstation") ||
      platform.includes("xbox") ||
      platform.includes("nintendo")
    ? <Gamepad2 size={17} />
    : platform.includes("android") ||
      platform.includes("ios")
    ? <Smartphone size={16} />
    : <Gamepad2 size={17} />;

  return (
    <div className="flex flex-row w-full min-w-0 items-start border border-surface-secondary py-2">
    <img
    className="w-28 shrink-0 h-auto pl-2"
    src={game.coverUrl === null ? placeholderBox : game.coverUrl}
    alt={`${game.title} cover`} />
    <div className="flex flex-col min-w-0 flex-1 items-center gap-1 text-center">
    <h2 className={`font-heading font-semibold ${titleSize}`}>{game.title}</h2>
    <div className="flex items-center gap-1">
      {platformIcon} <p className="text-sm text-center break-words">{game.platform}</p>
    </div>
    <p className="text-base">Status: {game.status}</p>
    {game.rating === null ? (
      <div className="flex flex-col items-center gap-1">
      <p className="text-text-secondary text-sm">Rating</p>
      <p className="text-xl">Not rated</p>
      </div>) : (
    <div className="flex flex-col items-center gap-1">
    <span className="text-text-secondary text-sm">Rating</span>
    <p className="text-yellow-400 text-3xl tracking-wide">
    {'★'.repeat(game.rating)}
    {'☆'.repeat(5 - game.rating)}
    </p>
    </div>
    )}
    </div>
    </div>
  );
}

export default GameCard