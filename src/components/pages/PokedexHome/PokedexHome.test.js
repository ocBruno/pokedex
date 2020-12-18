// import { render, screen } from '@testing-library/react'
// import PokedexHome from './PokedexHome'

// TODO: finish test
xtest('renders home page content', () => {
  render(<PokedexHome />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
