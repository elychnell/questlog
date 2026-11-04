import type { Filter } from '../types/types';

type FilterListProps = {
  activeFilter: Filter;
  setActiveFilter: (filter: Filter) => void;
};

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Want to play', value: 'want-to-play' },
  { label: 'Playing', value: 'playing' },
  { label: 'Completed', value: 'completed' },
  { label: 'Dropped', value: 'dropped' },
];

function FilterList({ activeFilter, setActiveFilter }: FilterListProps) {

  return (
  <ul className="flex gap-2 text-sm font-medium text-text-secondary">
    {filters.map((filter) => (
      <li key={filter.value}>
        <button
          className={`rounded-lg px-3 py-1.5 transition-colors ${
            activeFilter === filter.value
              ? 'bg-surface-secondary text-text'
              : 'hover:bg-surface-secondary'
          }`}
          aria-pressed={activeFilter === filter.value}
          type="button"
          onClick={() => setActiveFilter(filter.value)}
        >
          {filter.label}
        </button>
      </li>
    ))}
</ul>
  )
}

export default FilterList