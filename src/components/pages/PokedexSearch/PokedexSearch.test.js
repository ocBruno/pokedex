import { render, screen } from '@testing-library/react'
import PokedexSearch from './PokedexSearch'

test('renders learn react link', () => {
  render(<PokedexSearch />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
