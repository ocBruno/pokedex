import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import PokedexLogo from './PokedexLogo.svg'

import './PokedexNavbar.css'

/**
 * @export function PokedexNavbar
 * @return { React.FunctionComponent }
 */
export default function PokedexNavbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top">
        <img id="pokedex_logo" src={PokedexLogo} alt="Pokedex" />

        <Link to="/" className="navbar-brand" id="pokedex_title">
          Pokedex
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pokedex/favoritos">
                Favoritos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pokedex/busca">
                Buscar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
