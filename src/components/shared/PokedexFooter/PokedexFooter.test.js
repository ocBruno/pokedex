import { render, screen } from '@testing-library/react'
import PokedexFooter from './PokedexFooter'

test('renders learn react link', () => {
  render(<PokedexFooter />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
