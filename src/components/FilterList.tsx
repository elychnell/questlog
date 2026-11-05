import type { Filter } from '../types/types';

type FilterListProps = {
  activeFilter: Filter;
  setActiveFilter: (filter: Filter) => void;
};

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Want to play', value: 'want' },
  { label: 'Playing', value: 'playing' },
  { label: 'Completed', value: 'completed' },
  { label: 'Dropped', value: 'dropped' },
];

function FilterList({ activeFilter, setActiveFilter }: FilterListProps) {

  return (
  <ul className="max-w-[22em] flex justify-center flex-wrap gap-0.5 text-sm font-medium text-text-secondary">
    {filters.map((filter) => (
      <li key={filter.value}>
        <button
          className={`rounded-lg px-3 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
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