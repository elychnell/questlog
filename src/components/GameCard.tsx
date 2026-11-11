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
titleLength > 30 ? "text-base lg:text-lg" :
titleLength > 20 ? "text-lg lg:text-xl" :
"text-xl sm:text-2xl";

const titleSizeDetail =
titleLength > 30 ? "text-xl sm:text-2xl" :
titleLength > 20 ? "text-2xl sm:text-3xl" :
"text-3xl sm:text-4xl";


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

const [title, subtitle] = game.title.split(/:\s*/, 2);

if (variant === 'detail') {
    return (
    <div className="flex flex-col items-center gap-4 bg-surface border border-surface-secondary rounded-lg p-4 mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
      <h2 className={`w-full min-w-0 text-center break-words whitespace-normal font-heading font-semibold text-primary ${titleSizeDetail}`}>
      {title}
      {subtitle && (
      <>
      <span>:</span>
      <span className="block text-base text-primary-soft font-normal sm:text-lg">
        {subtitle}
      </span>
      </>
      )}
      </h2>
      <img
      className="w-48 h-auto mr-4 sm:w-58 lg:w-64"
      src={game.coverUrl || placeholderBox}
      alt={`${game.title} cover`} />
      <div className="sm:flex sm:flex-row sm:gap-7.5">
      <div className="flex w-full min-w-0 items-center justify-center gap-1">
      {platformIcon}
      <p className="min-w-0 break-words text-sm text-center">
      {game.platform}
      </p>
      </div>
    {game.playtime !== null && (
    <p className="whitespace-nowrap text-sm font-medium sm:text-base">Played: {formatPlaytime(game.playtime)}</p>
    )}
    </div>
    <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
      <p className="text-text-secondary text-sm sm:text-base">Status</p>
      <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${style}`}>{label}</span>
    </div>
    {game.rating === null ? (
      <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
        <p className="text-text-secondary text-sm sm:text-base">Rating</p>
        <p className="text-2xl">Not rated</p>
      </div>) : (
    <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
      <span className="text-text-secondary text-sm sm:text-base">Rating</span>
      <p className="text-yellow-400 text-3xl tracking-wide">
      {'★'.repeat(game.rating)}
      {'☆'.repeat(5 - game.rating)}
      </p>
    </div>
    )}
    <div className="flex flex-col items-center gap-1">
    <p className="text-text-secondary text-sm sm:text-base">Notes</p>
    <span className="text-base text-text whitespace-pre-wrap">{game.notes}</span>
    </div>
    </div>
    );
  }

  return (
  <div className="flex min-w-0 max-w-sm box-border flex-row items-center mx-auto gap-2 border border-surface-secondary rounded-lg bg-surface p-2 sm:max-w-md md:min-h-[260px] lg:max-w-lg 2xl:min-h-[310px]">
    <img
    className="w-30 shrink-0 h-auto pl-2 sm:w-38 sm:pl-4"
    src={game.coverUrl || placeholderBox}
    alt={`${game.title} cover`} />
    <div className="flex flex-col min-w-0 flex-1 items-center gap-1 text-center">
    <h2 className={`w-full min-w-0 max-w-full break-words whitespace-normal font-heading font-semibold text-primary ${titleSize}`}>
      {title}
      {subtitle && (
      <>
      <span>:</span>
      <span className="block text-base text-primary-soft font-normal sm:text-lg">
        {subtitle}
      </span>
      </>
      )}
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