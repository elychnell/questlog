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
  onSave: (data: GameFormData) => Promise<Game | undefined>;
  isSaving: boolean;
  error: string;
  submitLabel: string;
};

function GameForm({
  initialData,
  onSave,
  isSaving,
  error,
  submitLabel
}: GameFormProps) {
const [gameData, setGameData] = useState<GameFormData>(
  initialData ?? initialFormData
);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setGameData((prevData) => ({
    ...prevData,
    [name]: name === 'rating'
    ? (value === '' ? null : Number(value)) : value
  }));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  await onSave(gameData);
}


  return (
    <section>
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    <label>
    Title:
    <input
    type="text"
    name="title"
    required
    maxLength={100}
    value={gameData.title}
    onChange={handleChange}
    />
    </label>
    <label>
    Cover URL:
    <input
    type="text"
    name="coverUrl"
    pattern="https?://.+"
    title="Must start with http:// or https://"
    value={gameData.coverUrl}
    onChange={handleChange}
    />
    </label>
    <label>
    Platform:
    <input
    type="text"
    name="platform"
    required
    maxLength={40}
    value={gameData.platform}
    onChange={handleChange}
    />
    </label>
    <label>
    Status:
    <select
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
    <label>
    Rating:
    <input
    type="number"
    name="rating"
    min={1}
    max={5}
    step={1}
    value={gameData.rating ?? ''}
    onChange={handleChange}
    />
    </label>
    <label>
    Notes:
    <textarea
    name="notes"
    maxLength={1000}
    value={gameData.notes}
    onChange={handleChange}
    />
    </label>
    <button
    type="submit"
    disabled={isSaving}
    >{submitLabel}</button>
    {error && <p className="text-red-500">{error}</p>}
    {isSaving && <p>Saving game...</p>}
    {/* {!error && !isSaving && game && <p className="text-green-500">Game saved successfully!</p>} */}
    </form>
    </section>
  )
}

export default GameForm