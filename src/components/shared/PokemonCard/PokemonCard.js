import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  addPokemonToFavorites,
  removePokemonFromFavorites,
} from '../../../store/favoritePokemonsSlice'

import './PokemonCard.css'

/**
 * Compact pokemon ui card
 * describes the pokemon and allows to add/remove from favorites
 */
export default function PokemonCard(props) {
  const dispatch = useDispatch()
  const favoritePokemons = useSelector((state) => state.favoritePokemons)

  // check if pokemon already favorited
  let isPokemonFavorited = false

  for (let i = 0; i < favoritePokemons.favoritePokemons.length; i++) {
    if (favoritePokemons.favoritePokemons[i].id === props.pokemon.id) {
      isPokemonFavorited = true
      break
    }
  }

  /**
   * handleAddPokemonToFavorites
   * @param {*} event
   * prevent default event and add pokemon to favorites if not favorited
   */
  const handleAddPokemonToFavorites = (event) => {
    event.preventDefault()
    if (isPokemonFavorited === false) {
      dispatch(addPokemonToFavorites(props.pokemon))
    }
  }

  /**
   * handleRemovePokemonFromFavorites
   * @param {*} event
   * prevent default event and remove pokemon from favorites if favorited
   */
  const handleRemovePokemonFromFavorites = (event) => {
    event.preventDefault()
    if (isPokemonFavorited === true) {
      dispatch(removePokemonFromFavorites(props.pokemon))
    }
  }

  return (
    <section className="pokemon-card" id={props.pokemon.id}>
      <div className="pokemon-name">{props.pokemon.name}</div>
      <img
        className="pokemon-sprite-front"
        src={props.pokemon.sprites.front_default}
      />
      <div className="pokemon-card-abilities">
        <div className="pokemon-card-abilities-header">Abilities</div>
        {props.pokemon.abilities.map((ability, index) => (
          <div key={ability.ability.name} className="pokemon-card-ability-name">
            {index + 1}. {ability.ability.name}
          </div>
        ))}
      </div>
      {isPokemonFavorited === true ? (
        <button
          className="manage-favorites-btn btn btn-outline-danger ml-1"
          type="button"
          onClick={handleRemovePokemonFromFavorites}
        >
          Remover dos favoritos
        </button>
      ) : (
        <button
          className="manage-favorites-btn btn btn-outline-primary ml-1"
          type="button"
          onClick={handleAddPokemonToFavorites}
        >
          Adicionar aos favoritos
        </button>
      )}
    </section>
  )
}
