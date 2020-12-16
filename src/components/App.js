import logo from '../assets/logo.svg'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PokedexHome from './PokedexHome/PokedexHome'
import PokedexSearch from './PokedexSearch/PokedexSearch'
import PokedexFavorites from './PokedexFavorites/PokedexFavorites'
import PokedexNavbar from './PokedexNavbar/PokedexNavbar'
import PokedexFooter from './PokedexFooter/PokedexFooter'

export default function App() {
  return (
    <Router>
      <PokedexNavbar />
      <main role="main" id="page_container">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pokedex/favoritos">
            <PokedexFavorites />
          </Route>
          <Route path="/pokedex/busca">
            <PokedexSearch />
          </Route>
          <Route path="/pokedex">
            <PokedexHome />
          </Route>
        </Switch>
      </main>

      <PokedexFooter />
    </Router>
  )
}
