import type { SortOption, SortOrder } from "../types/types";
import { ArrowUpNarrowWide, ArrowDownWideNarrow } from "lucide-react";
function SortControl({ sortBy, setSortBy, sortOrder, setSortOrder }: { sortBy: SortOption; setSortBy: (value: SortOption) => void; sortOrder: SortOrder; setSortOrder: (value: SortOrder) => void }) {

return (
<section className="mt-4 flex flex-wrap items-center justify-center gap-2">
  <label className="flex items-center gap-2 text-sm font-medium text-text-secondary">
    Sort by:
    <select
      className="rounded-lg border border-surface-secondary bg-surface px-3 py-2 text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value as SortOption)}
    >
      <option value="title">Title</option>
      <option value="playtime">Time played</option>
      <option value="platform">Platform</option>
      <option value="rating">Rating</option>
    </select>
  </label>

  <button
    type="button"
    aria-label={sortOrder === "asc" ? "Sort descending" : "Sort ascending"}
    title={sortOrder === "asc" ? "Sort descending" : "Sort ascending"}
    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
    className="flex items-center justify-center rounded-lg border border-surface-secondary bg-surface p-2 text-primary transition-colors hover:border-primary hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  >
    {sortOrder === "asc"
      ? <ArrowUpNarrowWide size={20} />
      : <ArrowDownWideNarrow size={20} />}
  </button>
</section>
  )
}

export default SortControl