import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen bg-background text-text">
      <header className="border-b border-surface-secondary px-4 py-4">
  <div className="mx-auto flex max-w-7xl items-center justify-between">
    <Link to="/" className="text-2xl font-bold text-primary">
      QUESTLOG<span className="animate-pulse">_</span>
    </Link>

    <Link
      to="/games/new"
      className="rounded-lg bg-primary px-3 py-1.5 font-semibold text-background transition-colors hover:bg-primary-soft"
    >
      +Add game
    </Link>
  </div>
</header>
      <main className="mx-auto w-full min-w-0 px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-surface-secondary px-4 py-4">
        <p className="text-center text-sm text-text-secondary">
          Questlog – Your personal game library
        </p>
      </footer>
    </div>
  );
}

export default Layout;