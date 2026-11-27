import { useParams } from 'react-router-dom'
export function BookPage() {
  const { id } = useParams()
  return <div><h1>Книга #{id}</h1><p>Детали книги и рейтинг.</p></div>
}