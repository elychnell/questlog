import type { Game, Status } from "../types/types";
import { useState } from "react";
type GameFormData = Omit<Game, 'id'>;

const initialFormData: GameFormData = {
  title: '',
  platform: '',
  status:'want',
  rating: 0,
  coverUrl: '',
  notes: ''
}

const statusOptions: { label: string; value: Status }[] = [
  { label: 'Want to play', value: 'want' },
  { label: 'Playing', value: 'playing' },
  { label: 'Completed', value: 'completed' },
  { label: 'Dropped', value: 'dropped' },
];


function GameForm() {
  const [gameData, setGameData] = useState<GameFormData>(initialFormData);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setGameData((prevData) => ({
    ...prevData,
    [name]: name === 'rating' ? Number(value) : value
  }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(gameData);
  setGameData(initialFormData);
}


  return (
    <section>
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    <label>
    Title:
    <input
    type="text"
    name="title"
    value={gameData.title}
    onChange={handleChange}
    />
    </label>
    <label>
    Cover URL:
    <input
    type="text"
    name="coverUrl"
    value={gameData.coverUrl}
    onChange={handleChange}
    />
    </label>
    <label>
    Platform:
    <input
    type="text"
    name="platform"
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
    min={0}
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
    value={gameData.notes}
    onChange={handleChange}
    />
    </label>
    <button type="submit">Add game</button>
    </form>
    </section>
  )
}

export default GameForm