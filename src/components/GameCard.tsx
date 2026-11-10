import type { GameWithPlaytime } from "../types/types";
import placeholderBox from "../assets/placeholderBox.webp";
import { Gamepad2, Monitor, Smartphone } from "lucide-react";
import { formatPlaytime } from "../utils/formatPlaytime";

type GameCardProps = {
    game: GameWithPlaytime;
    variant?: 'list' | 'detail';
};

function GameCard({ game, variant = 'list' }: GameCardProps) {

const titleLength = game.title.length;

const titleSize =
titleLength > 30 ? "text-base" :
titleLength > 20 ? "text-lg" :
"text-xl";

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

const statusStyles = {
  want: {
    label: "Want to play",
    style: "border-amber-400/30 bg-amber-400/10 text-amber-400",
  },
  playing: {
    label: "Playing",
    style: "border-primary/30 bg-primary/10 text-primary",
  },
  completed: {
    label: "Completed",
    style: "border-blue-400/30 bg-blue-400/10 text-blue-400",
  },
  dropped: {
    label: "Dropped",
    style: "border-red-400/30 bg-red-400/10 text-red-400",
  },
};
const { label, style } = statusStyles[game.status];


if (variant === 'detail') {
    return (
    <div className="flex flex-col items-center gap-4 bg-surface border border-surface-secondary rounded-lg p-4">
      <h2 className="text-2xl font-bold">{game.title}</h2>
      <img
      className="w-48 h-auto mr-4"
      src={game.coverUrl || placeholderBox}
      alt={`${game.title} cover`} />
      <div className="flex w-full min-w-0 items-center justify-center gap-1">
      {platformIcon}
      <p className="min-w-0 break-words text-sm text-center">
      {game.platform}
      </p>
    </div>
    {game.playtime !== null && (
    <p>Played: {formatPlaytime(game.playtime)}</p>
    )}
    <div className="flex flex-col items-center gap-1">
      <p className="text-text-secondary text-sm">Status</p>
      <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${style}`}>{label}</span>
    </div>
    {game.rating === null ? (
      <div className="flex flex-col items-center gap-1">
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
    <div className="flex flex-col items-center gap-1">
    <p className="text-text-secondary text-sm">Notes</p>
    <span className="text-base text-text">{game.notes}</span>
    </div>
    </div>
    );
  }

  return (
  <div className="flex w-full min-w-0 box-border flex-row items-center gap-2 border border-surface-secondary rounded-lg bg-surface p-2">
    <img
    className="w-30 shrink-0 h-auto pl-2"
    src={game.coverUrl || placeholderBox}
    alt={`${game.title} cover`} />
    <div className="flex flex-col min-w-0 flex-1 items-center gap-1 text-center">
    <h2 className={`w-full min-w-0 max-w-full break-words whitespace-normal font-heading font-semibold ${titleSize}`}>
      {game.title}
    </h2>
    <div className="flex w-full min-w-0 items-center justify-center gap-1">
      {platformIcon}
      <p className="min-w-0 break-words text-sm text-center">
      {game.platform}
    </p>
    </div>
    {game.playtime !== null && (
    <p>Played: {formatPlaytime(game.playtime)}</p>
    )}
    <div className="flex flex-col items-center gap-1">
      <p className="text-text-secondary text-sm">Status</p>
      <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${style}`}>{label}</span>
    </div>
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