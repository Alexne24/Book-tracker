interface BookCardProps {
  title: string
  author: string
  rating: number
}

export function BookCard({ title, author, rating }: BookCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 12, margin: 8 }}>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>Рейтинг: {rating}/5</p>
    </div>
  )
}