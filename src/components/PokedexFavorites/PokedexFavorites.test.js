import { render, screen } from '@testing-library/react'
import PokedexFavorites from './PokedexFavorites'

test('renders learn react link', () => {
  render(<PokedexFavorites />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
