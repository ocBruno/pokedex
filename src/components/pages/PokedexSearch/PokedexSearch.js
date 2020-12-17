import './PokedexSearch.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { getPokemonByName } from '../../../store/getPokemonByNameSlice'
import { useDispatch, useSelector } from 'react-redux'
import PokemonCard from '../../shared/PokemonCard/PokemonCard'

/**
 * @export function PokedexSearch
 * @return { React.FunctionComponent }
 */
export default function PokedexSearch() {
  const dispatch = useDispatch()
  const getPokemon = useSelector((state) => state.getPokemon)
  console.log(getPokemon)

  useEffect(() => {
    if (getPokemon.getPokemonResult !== null) {
      console.log(getPokemon.getPokemonResult)
    } else {
      console.log(getPokemon)
    }
  })
  const handleGetPokemonByNameEvent = (event) => {
    event.preventDefault()
    const pokemonName = document.getElementById('pokemon_name_input').value
    dispatch(getPokemonByName(pokemonName))
  }

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
