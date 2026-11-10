import type { Game, GameFormData, Status } from "../types/types";
import { useState } from "react";

const initialFormData: GameFormData = {
  title: '',
  platform: '',
  status:'want',
  rating: null,
  coverUrl: '',
  notes: ''
}

const statusOptions: { label: string; value: Status }[] = [
  { label: 'Want to play', value: 'want' },
  { label: 'Playing', value: 'playing' },
  { label: 'Completed', value: 'completed' },
  { label: 'Dropped', value: 'dropped' },
];

type GameFormProps = {
  initialData?: GameFormData;
  initialPlaytime?: number | null;
  onSave: (
  data: GameFormData,
  playtime: number | null
  ) => Promise<Game | undefined>;
  isSaving: boolean;
  error: string;
  submitLabel: string;
};

function GameForm({
  initialData,
  initialPlaytime = null,
  onSave,
  isSaving,
  error,
  submitLabel
}: GameFormProps) {
const [gameData, setGameData] = useState<GameFormData>(
  initialData ?? initialFormData
);
const [playtime, setPlaytime] = useState<number | null>(
    initialPlaytime
  );

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setGameData((prevData) => ({
    ...prevData,
    [name]: name === 'rating'
    ? (value === '' ? null : Number(value)) : value
  }));
};

const handlePlaytimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.replace(',', '.');
  setPlaytime(
    value === '' ? null : Number(value) * 60
  );
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  await onSave(gameData, playtime);
}

const inputStyle =
  "w-full rounded-lg border border-surface-secondary bg-surface-secondary px-3 py-2 text-text placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

const labelStyle =
  "flex flex-col gap-1 text-sm font-medium text-text-secondary";

  return (
    <section>
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    <label className={labelStyle}>
    Title:
    <input
    className={inputStyle}
    type="text"
    name="title"
    required
    maxLength={100}
    value={gameData.title}
    onChange={handleChange}
    />
    </label>
    <label className={labelStyle}>
    Cover URL:
    <input
    className={inputStyle}
    type="text"
    name="coverUrl"
    pattern="https?://.+"
    title="Must start with http:// or https://"
    value={gameData.coverUrl}
    onChange={handleChange}
    />
    </label>
    <label className={labelStyle}>
    Platform:
    <input
    className={inputStyle}
    type="text"
    name="platform"
    required
    maxLength={40}
    value={gameData.platform}
    onChange={handleChange}
    />
    </label>
    <label className={labelStyle}>
    Playtime:
    <input
    className={inputStyle}
    type="number"
    name="playtime"
    min={0}
    step={0.5}
    value={playtime !== null ? playtime / 60 : ''}
    onChange={handlePlaytimeChange}
    />
    </label>
    <label className={labelStyle}>
    Status:
    <select
    className={inputStyle}
    name="status"
    value={gameData.status}
    onChange={handleChange}
    >
      {statusOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    </label>
    <label className={labelStyle}>
    Rating:
    <input
    className={inputStyle}
    type="number"
    name="rating"
    min={1}
    max={5}
    step={1}
    value={gameData.rating ?? ''}
    onChange={handleChange}
    />
    </label>
    <label className={labelStyle}>
    Notes:
    <textarea
    className={inputStyle}
    name="notes"
    maxLength={1000}
    value={gameData.notes}
    onChange={handleChange}
    />
    </label>
    <button
    className="rounded-lg bg-primary px-4 py-2 font-semibold text-background transition-colors hover:bg-primary-soft disabled:cursor-not-allowed disabled:opacity-50"
    type="submit"
    disabled={isSaving}
    >{submitLabel}</button>
    {error && <p className="whitespace-pre-line text-red-500">{error}</p>}
    {isSaving && <p>Saving game...</p>}
    </form>
    </section>
  )
}

export default GameForm