import { useState } from "react";
import FilterList from "../components/FilterList";
import useLocalStorage from "../hooks/useLocalStorage";

function HomePage() {
  
const [activeFilter, setActiveFilter] = useState(() => {
  return localStorage.getItem('gameFilter') || 'all';
});

  return (
  <section>
  <h2 className="text-2xl font-bold text-text mb-4">
    Games List
  </h2>
  <FilterList activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
  </section>
  );
}


export default HomePage;