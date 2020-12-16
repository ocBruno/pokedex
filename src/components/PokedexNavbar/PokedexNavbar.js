import './PokedexNavbar.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function PokedexNavbar() {
  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">
          Pokedex
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/pokedex">
                Inicio
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/pokedex/favoritos">
                Favoritos
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/pokedex/busca">
                Buscar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
