import { render, screen } from '@testing-library/react'
import PokedexHome from './PokedexHome'

test('renders learn react link', () => {
  render(<PokedexHome />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
