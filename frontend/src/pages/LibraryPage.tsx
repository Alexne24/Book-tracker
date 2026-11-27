import { BookCard } from '@book-tracker/ui-library'

export function LibraryPage() {
  return (
    <div>
      <h1>Моя коллекция</h1>
      <BookCard title="1984" author="Оруэлл" rating={5} />
      <p>Здесь будет список всех книг со статусами.</p>
    </div>
  )
}