import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom'

// Shared
import PokedexNavbar from './shared/PokedexNavbar/PokedexNavbar'
import PokedexFooter from './shared/PokedexFooter/PokedexFooter'

// Pages
import PokedexHome from './pages/PokedexHome/PokedexHome'
import PokedexSearch from './pages/PokedexSearch/PokedexSearch'
import PokedexFavorites from './pages/PokedexFavorites/PokedexFavorites'

import './App.css'

const RoutedPokedexHome = withRouter(PokedexHome)
const RoutedPokedexSearch = withRouter(PokedexSearch)
const RoutedPokedexFavorites = withRouter(PokedexFavorites)

export default function App() {
  return (
    <Router>
      <PokedexNavbar />
      <main role="main" id="page_container">
        <Switch>
          <Route path="/pokedex/favoritos">
            <RoutedPokedexFavorites />
          </Route>
          <Route path="/pokedex/busca">
            <RoutedPokedexSearch />
          </Route>
          <Route path="/">
            <RoutedPokedexHome />
          </Route>
        </Switch>
      </main>

      <PokedexFooter />
    </Router>
  )
}
