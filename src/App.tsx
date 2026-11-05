import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewGamePage from './pages/NewGamePage';
import GameDetailPage from './pages/GameDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import EditGamePage from './pages/EditGamePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/games/new" element={<NewGamePage />} />
          <Route path="/games/:id" element={<GameDetailPage />} />
          <Route path="/games/:id/edit" element={<EditGamePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;