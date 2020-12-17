import { render, screen } from '@testing-library/react'
import PokemonCard from './PokemonCard'

test('renders learn react link', () => {
  render(<PokemonCard />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
