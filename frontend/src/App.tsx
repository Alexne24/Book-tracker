import { Routes, Route, Link } from 'react-router-dom'
import { LibraryPage } from './pages/LibraryPage'
import { BookPage } from './pages/BookPage'
import { RecommendationsPage } from './pages/RecommendationsPage'
import { ProfilePage } from './pages/ProfilePage'
import { LoginPage } from './pages/LoginPage'

export default function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '10px', padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Коллекция</Link>
        <Link to="/recommendations">Рекомендации</Link>
        <Link to="/profile">Профиль</Link>
        <Link to="/login">Вход</Link>
      </nav>
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<LibraryPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<div><h1>404</h1><p>Страница не найдена</p></div>} />
        </Routes>
      </main>
    </div>
  )
}