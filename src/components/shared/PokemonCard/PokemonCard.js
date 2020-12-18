import './PokemonCard.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  addPokemonToFavorites,
  removePokemonFromFavorites,
} from '../../../store/favoritePokemonsSlice'

/**
 * @export function PokemonCard
 * @return { React.FunctionComponent }
 */
export default function PokemonCard(props) {
  const dispatch = useDispatch()
  const favoritePokemons = useSelector((state) => state.favoritePokemons)
  let isPokemonFavorited = false
  // set dynamic add / remove button depending on if pokemon already favorited

  for (let i = 0; i < favoritePokemons.favoritePokemons.length; i++) {
    if (favoritePokemons.favoritePokemons[i].id === props.pokemon.id) {
      isPokemonFavorited = true
      break
    }
  }

  console.log(isPokemonFavorited)
  useEffect(() => {
    console.log(favoritePokemons.favoritePokemons)
  })
  const handleAddPokemonToFavorites = (event) => {
    event.preventDefault()
    const pokemon = props.pokemon
    console.log(props)
    console.log(favoritePokemons)
    if (isPokemonFavorited === false) {
      dispatch(addPokemonToFavorites(pokemon))
    }
  }

  const handleRemovePokemonFromFavorites = (event) => {
    event.preventDefault()
    const pokemon = props.pokemon
    if (isPokemonFavorited === true) {
      dispatch(removePokemonFromFavorites(pokemon))
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
          className="add-to-favorites-btn btn btn-outline-dark mt-3 ml-1"
          type="button"
          onClick={handleRemovePokemonFromFavorites}
        >
          Remover dos favoritos
        </button>
      ) : (
        <button
          className="add-to-favorites-btn btn btn-outline-dark mt-3 ml-1"
          type="button"
          onClick={handleAddPokemonToFavorites}
        >
          Adicionar aos favoritos
        </button>
      )}
    </section>
  )
}
