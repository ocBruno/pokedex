import { render, screen } from '@testing-library/react'
import PokedexNavbar from './PokedexNavbar'

test('renders learn react link', () => {
  render(<PokedexNavbar />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
