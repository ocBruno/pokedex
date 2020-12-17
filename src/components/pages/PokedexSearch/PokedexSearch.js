import './PokedexSearch.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { getPokemonByName } from '../../../store/getPokemonByNameSlice'
import { useDispatch } from 'react-redux'

/**
 * @export function PokedexSearch
 * @return { React.FunctionComponent }
 */
export default function PokedexSearch() {
  const dispatch = useDispatch()

  const handleGetPokemonByNameEvent = (event) => {
    event.preventDefault()
    const pokemonName = document.getElementById('pokemonNameInput').value
    dispatch(getPokemonByName(pokemonName))
  }
  return (
    <div>
      <h2>
        Busque um pokemon pelo nome para visualizar mais detalhes sobre ele!
      </h2>
      <p>Você também podera adiciona-lo aos seus favoritos!</p>
      <form className="form-inline mt-2 mt-md-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Buscar pokemon"
          aria-label="Buscar pokemon"
          id="pokemonNameInput"
        />
        <button
          onClick={(event) => handleGetPokemonByNameEvent(event)}
          className="btn btn-outline-primary my-2 my-sm-0"
          type="submit"
        >
          Buscar
        </button>
      </form>
    </div>
  )
}
