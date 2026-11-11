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
  <ul className="max-w-[22em] sm:max-w-full flex justify-center flex-wrap gap-1 text-sm font-medium mx-auto">
    {filters.map((filter) => (
      <li key={filter.value}>
        <button
          className={`rounded-lg border px-3 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
          activeFilter === filter.value
          ? 'border-primary bg-primary text-background'
          : 'border-surface-secondary bg-surface text-text-secondary hover:border-primary hover:text-primary'
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