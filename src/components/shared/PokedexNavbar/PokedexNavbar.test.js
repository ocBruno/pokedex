import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import PokedexNavbar from './PokedexNavbar'

test('renders pokedex navbar links', () => {
  render(
    <Router>
      <PokedexNavbar />
    </Router>,
  )
  const homeLinkElement = screen.getByText(/inicio/i)
  const favoritesLinkElement = screen.getByText(/favoritos/i)
  const searchLinkElement = screen.getByText(/buscar/i)
  expect(homeLinkElement).toBeInTheDocument()
  expect(favoritesLinkElement).toBeInTheDocument()
  expect(searchLinkElement).toBeInTheDocument()
})
