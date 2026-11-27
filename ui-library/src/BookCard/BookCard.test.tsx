import { render, screen } from '@testing-library/react'
import { BookCard } from './BookCard'
import { BookCard as IndexedBookCard } from '../index'

describe('BookCard', () => {
  it('renders title, author and rating', () => {
    render(<BookCard title="Мастер и Маргарита" author="Булгаков" rating={5} />)
    expect(screen.getByText('Мастер и Маргарита')).toBeInTheDocument()
    expect(screen.getByText('Булгаков')).toBeInTheDocument()
    expect(screen.getByText('Рейтинг: 5/5')).toBeInTheDocument()
  })

  it('is exported from index', () => {
    expect(IndexedBookCard).toBe(BookCard)
  })
})