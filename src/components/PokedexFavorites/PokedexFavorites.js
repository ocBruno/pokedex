import './PokedexFavorites.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function PokedexFavorites() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/pokedex">Voltar</Link>
        </li>
      </ul>
    </nav>
  )
}
