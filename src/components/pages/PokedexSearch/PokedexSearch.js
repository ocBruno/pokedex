import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PokemonCard from '../../shared/PokemonCard/PokemonCard'

import { getPokemonByName } from '../../../store/getPokemonByNameSlice'

import './PokedexSearch.css'

/**
 * Pokedex Search Page
 * Allows user to search pokemon by name and returns simple card with info
 */
export default function PokedexSearch() {
  const dispatch = useDispatch()
  const getPokemon = useSelector((state) => state.getPokemon)
  const favoritePokemons = useSelector((state) => state.favoritePokemons)

  /**
   * handleGetPokemonByNameEvent
   * @param {Event} event
   * dispatches action to find pokemon according to pokemon name search input value
   */
  const handleGetPokemonByNameEvent = (event) => {
    event.preventDefault()
    const pokemonName = document.getElementById('pokemon_name_input').value
    dispatch(getPokemonByName(pokemonName))
  }

  /**
   * returnActiveErrorComponent
   * @param {*} getPokemonErrorType
   * @return {Element}
   * returns error component according on error type
   */
  const returnActiveErrorComponent = (getPokemonErrorType) => {
    if (getPokemonErrorType.includes('404')) {
      return (
        <>
          <h2>Oops!</h2>
          <p>Não encontramos um pokemon com esse nome</p>
        </>
      )
    } else {
      return (
        <>
          <h2>Oops!</h2>
          <p>Algo deu errado, verifique sua conexão ou tente novamente</p>
          <p>Caso o problema persista entre em contato..</p>
        </>
      )
    }
  }

  return (
    <div id="pokedex_search_container">
      <h2 id="pokedex_search_header">Buscar pokemon!</h2>
      <p>
        Busque um pokemon pelo nome para visualizar mais detalhes sobre ele!
      </p>
      <p>Você também podera adiciona-lo aos seus favoritos!</p>
      <form
        id="pokemon_search_input_container"
        className="form-inline mt-2 mt-md-0"
        onSubmit={(event) => handleGetPokemonByNameEvent(event)}
      >
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Buscar pokemon"
          required
          aria-label="Buscar pokemon"
          id="pokemon_name_input"
        />
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Buscar
        </button>
      </form>
      {getPokemon.getPokemonIsLoading === true ? (
        <div>Loading...</div>
      ) : getPokemon.getPokemonResult !== null ? (
        <PokemonCard pokemon={getPokemon.getPokemonResult} />
      ) : getPokemon.getPokemonError !== null ? (
        returnActiveErrorComponent(getPokemon.getPokemonError)
      ) : (
        <> </>
      )}
    </div>
  )
}
